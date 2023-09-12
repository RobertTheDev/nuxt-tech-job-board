import NavigationLink from 'models/config/navigation/NavigationLink';

const headerLinks: NavigationLink[] = [
  {
    href: '/',
    name: 'Browse Jobs',
  },
  {
    href: '/job-posts/upload-job',
    name: 'Upload job',
  },
  {
    href: '/companies',
    name: 'Explore Companies',
  },
  {
    href: '/candidates',
    name: 'Find Candidates',
  },
];

export default headerLinks;
