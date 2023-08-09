import * as Yup from 'yup';

const addDeadlineDateSchema = Yup.object().shape({
  deadlineDate: Yup.date().required('Deadline date is required'),
});

export default addDeadlineDateSchema;
