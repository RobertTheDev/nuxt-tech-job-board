export default interface JobPost {
  _id: string;
  company: {
    _id: string;
    createdAt: Date;
    name: string;
  };
  companyId: string;
  createdAt: Date;
  updatedAt: null;
  deadlineDate: Date;
  title: string;
}
