import Company from './Company';
import User from './User';

export default interface CompanyOwner {
  _id: string;
  companyId: string;
  company: Company;
  userId: string;
  owner: User[];
}
