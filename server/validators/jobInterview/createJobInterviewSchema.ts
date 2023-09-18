import { string, object, date } from 'yup';

const createJobInterviewSchema = object({
  createdAt: date().default(() => new Date()),
  startTime: date().required(),
  endTime: date().required(),
  userId: string().required(),
  jobPostId: string().required(),
  companyId: string().required(),
  locationType: string().required().oneOf(['Remote', 'In-Person']),
  remoteUrlLink: string().url(),
  address: object()
    .shape({
      street: string().min(1, 'Street cannot be empty').required(),
      city: string().min(1, 'City cannot be empty').required(),
      state: string().min(1, 'State cannot be empty').required(),
      postalCode: string().min(1, 'Postal code cannot be empty').required(),
      country: string().min(1, 'Country cannot be empty').required(),
    })
    .nullable()
    .optional()
    .unknown(false),
  dressCode: string().oneOf(['FORMAL', 'INFORMAL']),
  message: string().optional(),
  status: string()
    .default('IN PROGRESS')
    .oneOf([
      'BOOKED',
      'CANCELLED',
      'DECLINED',
      'EXPIRED',
      'IN PROGRESS',
      'RESCHEDULED',
      'SENT',
    ]),
}).unknown(false);

export default createJobInterviewSchema;
