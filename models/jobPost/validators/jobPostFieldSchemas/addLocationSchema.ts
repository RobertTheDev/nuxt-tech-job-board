import { object, date, string } from 'yup';

const addLocationSchema = object({
  updatedAt: date().default(() => new Date()),
  locationType: string()
    .oneOf(['on-premise', 'remote', 'hybrid'], 'Invalid location.')
    .required('Job location type is required.'),
  location: object().when('locationType', {
    is: 'remote',
    then: (schema) => schema.notRequired(),
    otherwise: (schema) =>
      schema
        .shape({
          address1: string().required('Address is required.'),
          address2: string().optional(),
          townOrCity: string().required('Town or city is required.'),
          county: string().optional(),
          postCode: string().required('Post code is required.'),
          country: string()
            .required('Country is required.')
            .default('United Kingdom'),
        })
        .required('Job location is required.'),
  }),
}).unknown(false);

export default addLocationSchema;
