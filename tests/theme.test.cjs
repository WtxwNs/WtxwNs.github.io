const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { test } = require('node:test');

const root = path.resolve(__dirname, '..');
function htmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name.startsWith('.')) return [];
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith('.html') ? [file] : [];
  });
}

const pages = htmlFiles(root).map((file) => ({
  file,
  scripts: [...fs.readFileSync(file, 'utf8').matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)]
    .map((match) => match[1]).filter((script) => script.includes('localStorage')),
})).filter((page) => page.scripts.length > 0);
assert.ok(pages.length > 0, 'Expected pages with theme controls');

function loadTheme(scripts, { stored = null, prefersDark = false, failure = null } = {}) {
  const classes = new Set();
  let click;
  const storage = {
    getItem() { if (failure === 'read') throw new Error('storage unavailable'); return stored; },
    setItem(key, value) { if (failure === 'write') throw new Error('storage unavailable'); stored = value; },
  };
  const context = {
    document: {
      documentElement: { classList: {
        add(name) { classes.add(name); },
        toggle(name) { if (classes.has(name)) { classes.delete(name); return false; } classes.add(name); return true; },
      } },
      querySelector(selector) {
        assert.equal(selector, '[data-theme-toggle]');
        return { addEventListener(event, handler) { assert.equal(event, 'click'); click = handler; } };
      },
    },
    window: { matchMedia() { return { matches: prefersDark }; } },
  };
  for (const target of [context, context.window]) {
    Object.defineProperty(target, 'localStorage', { get() {
      if (failure === 'access') throw new Error('storage blocked');
      return storage;
    } });
  }
  vm.createContext(context);
  scripts.forEach((script) => vm.runInContext(script, context));
  return { isDark: () => classes.has('dark'), click: () => click(), saved: () => stored };
}

for (const { file, scripts } of pages) {
  test(path.relative(root, file), async (t) => {
    await t.test('stored choice takes precedence and repeated toggles persist', () => {
      const theme = loadTheme(scripts, { stored: 'light', prefersDark: true });
      assert.equal(theme.isDark(), false);
      theme.click(); assert.equal(theme.isDark(), true); assert.equal(theme.saved(), 'dark');
      theme.click(); assert.equal(theme.isDark(), false); assert.equal(theme.saved(), 'light');
    });
    await t.test('system preference is used when no choice is saved', () => {
      assert.equal(loadTheme(scripts, { prefersDark: true }).isDark(), true);
      assert.equal(loadTheme(scripts, { stored: 'dark' }).isDark(), true);
    });
    for (const failure of ['access', 'read', 'write']) {
      await t.test(`theme still works when storage fails at ${failure}`, () => {
        const theme = loadTheme(scripts, { prefersDark: true, failure });
        assert.equal(theme.isDark(), true);
        theme.click(); assert.equal(theme.isDark(), false);
        theme.click(); assert.equal(theme.isDark(), true);
      });
    }
  });
}
