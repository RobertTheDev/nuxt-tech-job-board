import Company from './Company';

interface Salary {
  min: number;
  max: number;
  rate: string;
}

export default interface JobPost {
  _id: string;
  createdAt: Date;
  updatedAt?: Date;
  company: Company;
  companyId: string;
  contractType: string;
  deadlineDate: Date;
  description: string;
  location?: {
    address: string;
  };
  locationType: string;
  published: boolean;
  salary: Salary;
  seniorLevel: string;
  title: string;
  totalApplicants: number;
}
