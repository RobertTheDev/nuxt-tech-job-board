import NavigationLink from 'models/config/navigation/NavigationLink';

const accountSettingsMenuLinks: NavigationLink[] = [
  {
    href: '/settings',
    name: 'Account Settings',
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
    href: '/settings/close-account',
    name: 'Close Account',
  },
];

export default accountSettingsMenuLinks;
