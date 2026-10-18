export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: 'Services',
    children: [
      { label: 'Cats', href: '/cats/' },
      { label: 'Dogs', href: '/dogs/' },
      { label: 'Other Pets', href: '/other-pets/' },
      { label: 'Added Extras', href: '/extras/' },
      { label: 'Terms & Conditions', href: '/terms-conditions/' },
      { label: 'FAQ', href: '/faq/' },
    ],
  },
  { label: 'Prices', href: '/prices/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'News', href: '/news/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Links', href: '/links/' },
];
