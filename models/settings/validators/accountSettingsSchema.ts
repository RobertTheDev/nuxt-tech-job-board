import * as Yup from 'yup';

const accountSettingsSchema = Yup.object().shape({
  wesbite: Yup.string()
    .optional()
    .url('Website url must be a valid url format.'),
});

export default accountSettingsSchema;
