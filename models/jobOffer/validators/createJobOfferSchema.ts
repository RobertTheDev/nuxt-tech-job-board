import { string, object, date } from 'yup';

const createJobOfferSchema = object({
  createdAt: date().default(() => new Date()),
  deadlineDate: date().required(),
  userId: string().required(),
  jobPostId: string().required(),
  companyId: string().required(),
  message: string().optional(),
  status: string()
    .default('IN PROGRESS')
    .oneOf(['CANCELLED', 'DECLINED', 'EXPIRED', 'IN PROGRESS']),
}).unknown(false);

export default createJobOfferSchema;
