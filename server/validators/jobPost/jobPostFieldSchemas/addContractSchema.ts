import { object, date, string, number } from 'yup';

const addContractSchema = object({
  updatedAt: date().default(() => new Date()),
  seniorLevel: string()
    .oneOf(['junior', 'mid', 'senior'], 'Invalid level.')
    .required('Senior level is required.'),
  contractType: string()
    .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.')
    .required('Contract type is required.'),
  salary: object().shape({
    rate: string().required('Salary rate is required.'),
    min: number().min(0).required('Minimum salary is required.'),
    max: number().min(yup.ref('min')).required('Salary is required.'),
  }),
}).unknown(false);

export default addContractSchema;
