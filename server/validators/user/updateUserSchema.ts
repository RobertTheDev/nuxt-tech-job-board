import * as yup from 'yup';

const updateUserSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
    firstName: yup.string().optional(),
    lastName: yup.string().optional(),
    companiesFollowed: yup.number().optional(),
    companiesOwned: yup.number().optional(),
    jobPostsApplied: yup.number().optional(),
    jobPostsSaved: yup.number().optional(),
  })
  .unknown(false);

export type UpdateUserSchemaType = yup.InferType<typeof updateUserSchema>;

export default updateUserSchema;
