import { object, string, date, number, ref } from 'yup';

const updateJobPostSchema = object({
  companyId: string(),
  updatedAt: date().default(() => new Date()),
  // description: yup.string(),
  // deadlineDate: yup
  //   .date()
  //   .min(new Date(), 'Deadline date cannot be in the past or current date.')
  //   .max(
  //     new Date(new Date().setMonth(new Date().getMonth() + 3)),
  //     'Deadline date cannot be more than 3 months in the future.',
  //   ),
  // locationType: yup
  //   .string()

  //   .notRequired()
  //   .oneOf(['on-premise', 'remote', 'hybrid'], 'Invalid location.'),

  // location: yup
  //   .object()
  //   .shape({
  //     fullName: yup.string(),
  //     streetAddress: yup.string(),
  //     city: yup.string(),
  //     state: yup.string(),
  //     postalCode: yup.string(),
  //     country: yup.string(),
  //   })
  //   .nullable(),
  salary: object()
    .shape({
      rate: string(),
      min: number().min(0),
      max: number().min(ref('min')),
    })
    .unknown(false),
  // seniorLevel: yup
  //   .string()
  //   .notRequired()
  //   .oneOf(['junior', 'mid', 'senior'], 'Invalid level.'),
  // contractType: yup
  //   .string()
  //   .notRequired()
  //   .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.'),
  // skills: yup
  //   .array()
  //   .of(yup.string())
  //   .max(20, 'Maximum of 20 skills are allowed.')
  //   .notRequired(),

  title: string().optional(),
}).unknown(false);

export default updateJobPostSchema;
