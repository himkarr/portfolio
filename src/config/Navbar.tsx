export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'logo',
    width: 100,
    height: 100,
  },
  navItems: [
    {
      label: 'Home',
      href: '/home',
    },
    {
      label: 'Work',
      href: '/work',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
  ] as NavItem[],
};
