import CompanyOwner from './CompanyOwner';
import JobPost from './JobPost';
import User from './User';

export default interface Company {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  name: string;
  totalEmployees: string;
  category: string;
  description: string;
  logo: {
    alt: string;
    url: string;
  };
  jobPosts: JobPost[];
  findCompanyOwners: CompanyOwner[];
  owners: User[];
}
