import { copy } from './profile';

export type Lang = keyof typeof copy;

export const languages: Lang[] = ['en', 'zh'];

export const navItems = [
  { key: 'research', href: 'academic' },
  { key: 'publications', href: 'publications' },
  { key: 'systems', href: 'projects' },
  { key: 'writing', href: 'blog' },
  { key: 'cv', href: 'cv' }
] as const;

export function localizedPath(lang: Lang, path = '') {
  const clean = path.replace(/^\/|\/$/g, '');
  return `/${lang}${clean ? `/${clean}` : ''}`;
}
