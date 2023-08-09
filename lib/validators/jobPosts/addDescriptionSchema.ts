import * as Yup from 'yup';

const addDescriptionSchema = Yup.object().shape({
  description: Yup.string().required('Description is required.'),
});

export default addDescriptionSchema;
