import NavigationLink from '@/models/config/navigation/NavigationLink';

const profileMenuLinks: NavigationLink[] = [
  { href: '/profile', name: 'Profile' },
  {
    href: '/profile/edit-profile',
    name: 'Edit Profile',
  },
  { href: '/job-applications', name: 'My Applications' },
  { href: '/job-interviews', name: 'My Interviews' },
  { href: '/my-companies', name: 'My Companies' },
  { href: '/followed-companies', name: 'Followed Companies' },
  { href: '/settings', name: 'Account Settings' },
];

export default profileMenuLinks;
