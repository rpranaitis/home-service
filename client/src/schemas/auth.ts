import * as Yup from 'yup';
import { messages } from './constants';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().min(2, messages.short).max(50, messages.long).required(messages.required),
  age: Yup.number().required(messages.required),
  email: Yup.string().email('Bad email address format.').required(messages.required),
  password: Yup.string().min(8, 'Password is too short. Minimum length is 8 symbols.').required(messages.required),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email('Bad email address format.').required(messages.required),
  password: Yup.string().required(messages.required),
});
