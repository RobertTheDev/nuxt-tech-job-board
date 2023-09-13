import NavigationLink from 'models/config/navigation/NavigationLink';

const profileMenuLinks: NavigationLink[] = [
  { href: '/profile', name: 'Profile' },
  { href: '/profile/my-companies', name: 'My Companies' },
  { href: '/profile/saved-jobs', name: 'Saved Jobs' },
  { href: '/profile/followed-companies', name: 'Followed Companies' },
  { href: '/profile/my-applications', name: 'My Applications' },
  { href: '/settings', name: 'Account Settings' },
];

export default profileMenuLinks;
