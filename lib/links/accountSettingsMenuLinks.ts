import NavigationLink from 'lib/types/NavigationLink';

const accountSettingsMenuLinks: NavigationLink[] = [
  {
    href: '/account-settings',
    name: 'Account Settings',
  },
  {
    href: '/account-settings/change-email',
    name: 'Change Email',
  },
  {
    href: '/account-settings/change-password',
    name: 'Change Password',
  },
  {
    href: '/account-settings/upload-cv',
    name: 'Upload CV',
  },
  {
    href: '/account-settings/close-account',
    name: 'Close Account',
  },
];

export default accountSettingsMenuLinks;
