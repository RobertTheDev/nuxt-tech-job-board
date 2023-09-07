import Company from '../../company/types/Company';
import User from '../../user/types/User';

export default interface CompanyFollower {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  companyId: string;
  company: Company;
  userId: string;
  user: User;
}
