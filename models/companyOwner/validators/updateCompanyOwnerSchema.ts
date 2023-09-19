import { date, string, object } from 'yup';

const updateCompanyOwnerSchema = object({
  updatedAt: date().default(() => new Date()),
  companyId: string().optional(),
  userId: string().optional(),
}).unknown(false);

export default updateCompanyOwnerSchema;
