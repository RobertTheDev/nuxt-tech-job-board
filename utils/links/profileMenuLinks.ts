import NavigationLink from 'models/config/navigation/NavigationLink';

const profileMenuLinks: NavigationLink[] = [
  { href: '/profile', name: 'Profile' },
  { href: '/settings', name: 'Account Settings' },
  { href: '/profile/my-companies', name: 'My Companies' },
  { href: '/profile/followed-companies', name: 'Followed Companies' },
  { href: '/profile/my-applications', name: 'My Applications' },
];

export default profileMenuLinks;
