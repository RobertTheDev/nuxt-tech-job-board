import Company from './Company';
import User from './User';

export default interface CompanyOwner {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  companyId: string;
  company: Company;
  userId: string;
  user: User;
}
