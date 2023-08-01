import * as yup from 'yup';

const createJobOfferSchema = yup
  .object({
    createdAt: yup.date().default(() => new Date()),
  })
  .unknown(false);

export type CreateJobOfferSchemaType = yup.InferType<
  typeof createJobOfferSchema
>;

export default createJobOfferSchema;
