import * as yup from 'yup';

const addContractSchema = yup.object().shape({
  salary: yup.object().shape({
    rate: yup.string().required('Rate is required.'),
    min: yup.number().min(0).required('Minimum wage is required.'),
    max: yup.number().min(0).required('Maximum wage is required.'),
  }),

  seniorLevel: yup
    .string()
    .required('Senior level is required.')
    .oneOf(['junior', 'mid', 'senior'], 'Invalid level.'),
  contractType: yup
    .string()
    .required('Contract type is required.')
    .oneOf(['contract', 'full-time', 'part-time'], 'Invalid contract type.'),
});

export default addContractSchema;

// contract: yup
// .object()
// .notRequired()
// .default(null)
// .shape({
//   type: yup
//     .string()
//     .required('Contract type is required')
//     .oneOf(
//       ['Contract', 'Full-Time', 'Part-Time'],
//       'Invalid contract type.',
//     ),
//   level: yup
//     .string()
//     .required('Contract level is required')
//     .oneOf(['juniot', 'mid', 'senior'], 'Invalid level.'),
//   salary: yup.object().shape({
//     rate: yup.string().required('Salary rate is required'),
//     min: yup.number().min(0).required('Minimum salary is required'),
//     max: yup
//       .number()
//       .min(yup.ref('min'))
//       .required('Maximum salary is required'),
//   }),
// }),

// export default addContractSchema;
