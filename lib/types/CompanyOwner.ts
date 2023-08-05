import Company from './Company';

export default interface CompanyOwner {
  _id: string;
  companyId: string;
  company: Company;
  userId: string;
  owner: {
    _id: string;
    lastName: string;
    firstName: string;
    emailAddress: string;
    createdAt: string;
  }[];
}
