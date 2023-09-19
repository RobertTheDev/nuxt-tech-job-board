import { object, string, date } from 'yup';

const createCompanyFollowerSchema = object({
  createdAt: date()
    .optional()
    .default(() => new Date()),
  companyId: string().required('A company id is required.'),
  userId: string().required('A user id is required.'),
}).unknown(false);

export default createCompanyFollowerSchema;
