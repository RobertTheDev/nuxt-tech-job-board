import JobPost from './JobPost';

export default interface Company {
  _id: string;
  name: string;
  totalEmployees: string;
  category: string;
  description: string;
  logo: {
    alt: string;
    url: string;
  };
  jobPosts: JobPost[];
  findCompanyOwners: {
    _id: string;
    companyId: string;
    userId: string;
  };
  owners: {
    _id: string;
    lastName: string;
    firstName: string;
    emailAddress: string;
    createdAt: Date;
  }[];
}
