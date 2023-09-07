import NavigationLink from 'models/config/navigation/NavigationLink';

const accountSettingsMenuLinks: NavigationLink[] = [
  {
    href: '/profile/account-settings',
    name: 'Account Settings',
  },
  {
    href: '/profile/account-settings/change-email',
    name: 'Change Email',
  },
  {
    href: '/profile/account-settings/change-password',
    name: 'Change Password',
  },
  {
    href: '/profile/account-settings/upload-cv',
    name: 'Upload CV',
  },
  {
    href: '/profile/account-settings/close-account',
    name: 'Close Account',
  },
];

export default accountSettingsMenuLinks;
