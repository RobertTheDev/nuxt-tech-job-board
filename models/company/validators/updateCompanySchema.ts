import * as yup from 'yup';

const updateCompanySchema = yup
  .object({
    name: yup.string().required('A company name is required.'),
    description: yup.string().required('A company description is required.'),
    category: yup.string().required('A company category is required.'),
    totalEmployees: yup
      .string()
      .oneOf([
        '<100',
        '100-500',
        '500-1000',
        '1000-5000',
        '5000-10000',
        '10000+',
      ])
      .required(),
    logo: yup
      .object()
      .shape({
        url: yup.string().url().required('Company logo url is required.'),
      })
      .required('A company logo is required.'),
    // coverImage: yup
    //   .object()
    //   .shape({
    //     url: yup.string().url().required(),
    //   })
    //   .nullable()
    //   .default(null),
  })
  .unknown(false);

export type UpdateCompanySchemaType = yup.InferType<typeof updateCompanySchema>;

export default updateCompanySchema;
