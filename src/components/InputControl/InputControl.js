import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={styles.input} type="text" {...props} />
    </div>
  );
}

export default InputControl;
