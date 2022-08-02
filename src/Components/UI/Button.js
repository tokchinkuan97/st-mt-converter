import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${props.className} ${styles.btn}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
