import NavigationLink from '@/models/config/navigation/NavigationLink';

const settingsMenuLinks: NavigationLink[] = [
  {
    href: '/settings',
    name: 'Account Settings',
  },
  {
    href: '/settings/change-display',
    name: 'Change Display',
  },
  {
    href: '/settings/change-email',
    name: 'Change Email',
  },
  {
    href: '/settings/change-password',
    name: 'Change Password',
  },
  {
    href: '/settings/upload-cv',
    name: 'Upload CV',
  },
  {
    href: '/settings/verify-email',
    name: 'Verify Email',
  },
  {
    href: '/settings/close-account',
    name: 'Close Account',
  },
];

export default settingsMenuLinks;
