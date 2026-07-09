import { copy } from './profile';

export type Lang = keyof typeof copy;

export const languages: Lang[] = ['en', 'zh'];

export const navItems = [
  { key: 'home', href: '' },
  { key: 'academic', href: 'academic' },
  { key: 'publications', href: 'publications' },
  { key: 'projects', href: 'projects' },
  { key: 'blog', href: 'blog' },
  { key: 'links', href: 'links' },
  { key: 'about', href: 'about' },
  { key: 'cv', href: 'cv' }
] as const;

export function localizedPath(lang: Lang, path = '') {
  const clean = path.replace(/^\/|\/$/g, '');
  return `/${lang}${clean ? `/${clean}` : ''}`;
}
