import CompanyOwner from './CompanyOwner';
import JobPost from './JobPost';
import User from './User';

interface CompanyLogo {
  alt: string;
  url: string;
}

export default interface Company {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  name: string;
  totalEmployees: string;
  category: string;
  description: string;
  logo: CompanyLogo;
  jobPosts: JobPost[];
  findCompanyOwners: CompanyOwner[];
  owners: User[];
}
