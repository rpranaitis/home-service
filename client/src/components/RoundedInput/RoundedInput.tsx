import { FC, InputHTMLAttributes } from 'react';
import styles from './RoundedInput.module.scss';

interface RoundedInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const RoundedInput: FC<RoundedInputProps> = (props) => {
  return <input className={styles.input} {...props} />;
};

export default RoundedInput;
