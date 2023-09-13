import * as yup from 'yup';

const updateJobOfferSchema = yup
  .object({
    updatedAt: yup.date().default(() => new Date()),
  })
  .unknown(false);

export type UpdateJobOfferSchemaType = yup.InferType<
  typeof updateJobOfferSchema
>;

export default updateJobOfferSchema;
