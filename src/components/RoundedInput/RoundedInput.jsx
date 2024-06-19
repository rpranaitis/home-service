import styles from './RoundedInput.module.scss';

const RoundedInput = (props) => {
  return <input className={styles.input} {...props} />;
};

export default RoundedInput;
