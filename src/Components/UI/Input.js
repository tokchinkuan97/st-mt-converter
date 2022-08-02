import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`${props.className} ${styles.input}`}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
