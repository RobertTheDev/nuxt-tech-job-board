import Company from './Company';

export default interface JobPost {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  company: Company;
  companyId: string;
  deadlineDate: Date;
  title: string;
}
