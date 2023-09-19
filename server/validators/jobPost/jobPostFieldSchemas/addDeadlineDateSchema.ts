import { object, date } from 'yup';

const addDeadlineDateSchema = object({
  updatedAt: date().default(() => new Date()),
  deadlineDate: date().required('Job deadline date is required.'),
}).unknown(false);

export default addDeadlineDateSchema;
