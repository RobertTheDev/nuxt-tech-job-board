import JobPost from './JobPost';
import User from './User';

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
  owners: User[];
}
