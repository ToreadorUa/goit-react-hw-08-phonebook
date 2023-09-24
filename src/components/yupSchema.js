import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'The name must be longer than 3 letters')
    .required('This field is required'),
  number: yup
    .string('Phone number is only numbers')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('This field is required'),
});
