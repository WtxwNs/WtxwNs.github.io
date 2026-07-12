import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { execFileSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const dist = join(root, 'dist');
const publishDir = join(tmpdir(), 'tongxi-wang-homepage-deploy');

function git(args, options = {}) {
  return execFileSync('git', args, {
    cwd: options.cwd ?? root,
    encoding: 'utf8',
    stdio: options.capture ? 'pipe' : 'inherit'
  }).trim();
}

if (!existsSync(dist)) {
  throw new Error('dist directory not found. Run the build before deploying.');
}

const remote = git(['remote', 'get-url', 'origin'], { capture: true });
const userName = git(['config', 'user.name'], { capture: true }) || 'Tongxi Wang';
const userEmail = git(['config', 'user.email'], { capture: true }) || 'tongxi_wang@seu.edu.cn';

rmSync(publishDir, { recursive: true, force: true });
mkdirSync(publishDir, { recursive: true });
cpSync(dist, publishDir, { recursive: true });
writeFileSync(join(publishDir, '.nojekyll'), '');

git(['init', '--initial-branch=main'], { cwd: publishDir });
git(['config', 'user.name', userName], { cwd: publishDir });
git(['config', 'user.email', userEmail], { cwd: publishDir });
git(['add', '--all'], { cwd: publishDir });
git(['commit', '-m', 'Deploy static site'], { cwd: publishDir });
git(['remote', 'add', 'origin', remote], { cwd: publishDir });
git(['push', '--force', 'origin', 'HEAD:main'], { cwd: publishDir });

rmSync(publishDir, { recursive: true, force: true });
console.log('\nDeployment complete: https://wtxwns.github.io');
