import { date, string, object } from 'yup';

const createCompanyOwnerSchema = object({
  createdAt: date().default(() => new Date()),
  companyId: string().required('A company id is required.'),
  userId: string().required('A user id is required.'),
}).unknown(false);

export default createCompanyOwnerSchema;
