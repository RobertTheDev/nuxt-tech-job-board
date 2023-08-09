import * as yup from 'yup';

const addContractSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    seniorLevel: yup
      .string()
      .oneOf(['junior', 'mid', 'senior'], 'Invalid level.')
      .required('Senior level is required.'),
    contractType: yup
      .string()
      .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.')
      .required('Contract type is required.'),
    salary: yup.object().shape({
      rate: yup.string().required('Salary rate is required.'),
      min: yup.number().min(0).required('Minimum salary is required.'),
      max: yup.number().min(yup.ref('min')).required('Salary is required.'),
    }),
  })
  .unknown(false);

export type AddContractSchemaType = yup.InferType<typeof addContractSchema>;

export default addContractSchema;
