import * as yup from 'yup';

const addTitleSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
});

export default addTitleSchema;
