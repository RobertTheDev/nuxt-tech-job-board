// eslint-disable-next-line import/named
import { date, string, object, InferType, array, boolean } from 'yup';
import { subYears } from 'date-fns';

const invalidUrlMessage = 'Please provide a valid URL.';

const jobTypeValues = ['Hybrid', 'On-premise', 'Remote'];

const phoneRegExp = /^\+?[0-9]{1,15}$/;

const updateUserSchema = object({
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
  contact: object()
    .shape({
      mobilePhoneNumber: string()
        .matches(phoneRegExp, 'Mobile phone number is not valid')
        .min(1, 'Mobile phone number cannot be empty.')
        .optional(),
      landlinePhoneNumber: string()
        .matches(phoneRegExp, 'Landline phone number is not valid')
        .min(1, 'Landline phone number cannot be empty.')
        .optional(),
      emailAddress: string()
        .email('Must be in valid email format.')
        .min(1, 'Contact email address cannot be empty.')
        .optional(),
      websiteUrl: string()
        .url(invalidUrlMessage)
        .min(1, 'Website URL cannot be empty.')
        .nullable()
        .optional(),
      githubAccountUrl: string()
        .matches(
          /^https:\/\/www\.github\.com\/[a-zA-Z0-9-]+/,
          'Invalid GitHub URL',
        )
        .min(1, 'GitHub account URL cannot be empty.')
        .url(invalidUrlMessage)
        .nullable()
        .optional(),
      linkedInAccountUrl: string()
        .matches(
          /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+/,
          'Invalid LinkedIn URL',
        )
        .url(invalidUrlMessage)
        .min(1, 'LinkedIn account URL cannot be empty.')
        .nullable()
        .optional(),
      xAccountUrl: string()
        .matches(
          /^(https:\/\/www\.x\.com\/[a-zA-Z0-9-]+)|(https:\/\/www\.twitter\.com\/[a-zA-Z0-9_]+)/,
          'Invalid URL. Must be a valid X or Twitter URL',
        )
        .url(invalidUrlMessage)
        .min(1, 'X account URL cannot be empty.')
        .nullable()
        .optional(),
    })
    .nullable()
    .optional()
    .unknown(false),
  cv: string().min(1, 'CV cannot be empty.').optional(),
  dateOfBirth: date()
    .max(subYears(new Date(), 16), 'You must be at least 16 years old.')
    .min(
      subYears(new Date(), 100),
      'Your date of birth cannot be over 100 years in the past.',
    )
    .optional(),
  isLookingFor: array().of(string().oneOf(jobTypeValues)).nullable().optional(),
  isWillingToRelocate: boolean().optional(),
  jobTitle: string().nullable().min(1, 'CV cannot be empty.').optional(),
}).unknown(false);

export type UpdateUserSchemaType = InferType<typeof updateUserSchema>;

export default updateUserSchema;
