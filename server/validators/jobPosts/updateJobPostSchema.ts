import * as yup from 'yup';

const updateJobPostSchema = yup
  .object({
    companyId: yup
      .string()
      .required('A company id is required for a job post.'),
    updatedAt: yup.date().default(() => new Date()),
    description: yup
      .string()
      .required('A job description is required for a job post.'),
    category: yup
      .string()
      .required('A job category is required for a job post.'),
    contractType: yup
      .string()
      .required('Location type is required.')
      .oneOf(['Contract', 'Full-Time', 'Part-Time'], 'Invalid contract type.'),
    deadlineDate: yup
      .date()
      .required('Deadline date is required.')
      .min(new Date(), 'Deadline date cannot be in the past or current date.')
      .max(
        new Date(new Date().setMonth(new Date().getMonth() + 3)),
        'Deadline date cannot be more than 3 months in the future.',
      ),
    location: yup.string().optional(),
    locationType: yup
      .string()
      .required('Location type is required.')
      .oneOf(['Remote', 'Hybrid', 'On-Site'], 'Invalid location type.'),
    totalEmployees: yup.string().required('Total employees is required.'),
    published: yup.boolean().default(false),
    salary: yup
      .object({
        amount: yup.number().required('Salary amount is required.'),
        rate: yup
          .string()
          .oneOf(
            ['Hourly', 'Daily', 'Weekly', 'Monthly', 'Annually'],
            'Invalid rate.',
          )
          .default('Annually'),
      })
      .required('Salary details are required.'),
    skills: yup
      .array()
      .of(yup.string())
      .required('Skills are required.')
      .min(3, 'Minimum of 3 skills are required.')
      .max(20, 'Maximum of 20 skills are allowed.'),
    title: yup.string().required('A job title is required for a job post.'),
  })
  .unknown(false);

export type UpdateJobPostSchemaType = yup.InferType<typeof updateJobPostSchema>;

export default updateJobPostSchema;
