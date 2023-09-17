// eslint-disable-next-line import/named
import { date, string, object, InferType, array } from 'yup';

const updateUserSchema = object({
  updatedAt: date().default(() => new Date()),
  mobilePhoneNumber: string().optional(),
  landlinePhoneNumber: string().optional(),
  emailAddress: string().email().optional(),
  xUrl: string().url().optional(),
  linkedInUrl: string().url().optional(),
  websiteUrl: string().optional(),
  dateOfBirth: date().optional(),
  cv: string().optional(),
  address: object()
    .shape({
      street: string().optional(),
      city: string().optional(),
      state: string().optional(),
      postalCode: string().optional(),
      country: string().optional(),
    })
    .optional(),
  lookingFor: array()
    .of(string().oneOf(['remote', 'on-premise', 'hybrid']))
    .optional(),
}).unknown(false);

export type UpdateUserSchemaType = InferType<typeof updateUserSchema>;

export default updateUserSchema;
