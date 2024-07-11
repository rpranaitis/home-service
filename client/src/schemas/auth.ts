import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Per trumpas!').max(50, 'Per ilgas!').required('Privalomas laukelis'),
  age: Yup.string().min(2, 'Per trumpas!').max(50, 'Per ilgas!').required('Privalomas laukelis'),
  email: Yup.string().email('Netinkamas el. paštas').required('Privalomas laukelis'),
  password: Yup.string().min(8, 'Slaptažodis per trumpas - minimalus ilgis yra 8 simboliai').required('Privalomas laukelis'),
});
