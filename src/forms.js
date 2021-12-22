import * as Yup from 'yup';

const postalRegExp =
  /^([0-9A-Za-z]{5}|[0-9A-Za-z]{9}|(([0-9a-zA-Z]{5}-){1}[0-9a-zA-Z]{4}))$/;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const visitedSchema = Yup.object().shape({
  seller: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  company: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  address: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  postal: Yup.string()
    .matches(postalRegExp, 'Invalid code')
    .required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Invalid phone')
    .required('Required'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  note: Yup.string().min(2, 'Too Short!').max(2000, 'Too Long!'),
});

export const visitedInitial = {
  seller: 'ssdsa',
  company: 'asdasd',
  name: 'asdas',
  city: 'sadasd',
  address: 'asdsadasdafs',
  postal: '55555',
  phone: '23423423324',
  email: 'dsfds@sadas.das',
  note: 'asdsada',
  pois: [],
};
