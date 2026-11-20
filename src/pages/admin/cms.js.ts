import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';

export async function GET() {
  const entry = createRequire(import.meta.url).resolve('@sveltia/cms');
  const bundle = await readFile(resolve(dirname(entry), '../dist/sveltia-cms.js'));
  return new Response(bundle, { headers: { 'Content-Type': 'text/javascript; charset=utf-8' } });
}
