import * as yup from 'yup';

const addLocationSchema = yup
  .object({
    locationType: yup
      .string()
      .oneOf(['on-premise', 'remote', 'hybrid'], 'Invalid location.')
      .required('Job location type is required.'),
    location: yup.object().when('locationType', {
      is: 'remote',
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema
          .shape({
            address1: yup.string().required('Address is required.'),
            address2: yup.string().optional(),
            townOrCity: yup.string().required('Town or city is required.'),
            county: yup.string().optional(),
            postCode: yup.string().required('Post code is required.'),
            country: yup
              .string()
              .required('Country is required.')
              .default('United Kingdom'),
          })
          .required('Job location is required.'),
    }),
  })
  .unknown(false);

export type AddLocationSchemaType = yup.InferType<typeof addLocationSchema>;

export default addLocationSchema;
