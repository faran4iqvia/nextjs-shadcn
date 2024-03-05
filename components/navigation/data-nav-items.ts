import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface NavItems {
 id: number;
 path: string;
 label: string;
 iconName: keyof typeof dynamicIconImports;
}

export const navItems: NavItems[] = [
 {
  id: 0,
  path: '/about',
  label: 'About',
  iconName: 'info',
 },
 {
  id: 1,
  path: '/contact',
  label: 'Contact',
  iconName: 'contact',
 },
];
