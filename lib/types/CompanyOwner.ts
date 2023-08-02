export default interface CompanyOwner {
  _id: string;
  companyId: string;
  company: {
    _id: string;
    createdAt: Date;
    name: string;
  };
  userId: string;
  owner: {
    _id: string;
    lastName: string;
    firstName: string;
    emailAddress: string;
    createdAt: string;
  }[];
}
