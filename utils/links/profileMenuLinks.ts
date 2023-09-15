import NavigationLink from 'models/config/navigation/NavigationLink';

const profileMenuLinks: NavigationLink[] = [
  { href: '/profile', name: 'Profile' },
  {
    href: '/profile/edit-profile',
    name: 'Edit Profile',
  },
  { href: '/settings', name: 'Account Settings' },
  {
    href: '/upload-cv',
    name: 'Upload CV',
  },
  { href: '/my-companies', name: 'My Companies' },
  { href: '/saved-jobs', name: 'Saved Jobs' },
  { href: '/followed-companies', name: 'Followed Companies' },
  { href: '/job-applications', name: 'My Applications' },
];

export default profileMenuLinks;
