import React from "react";
import styles from "./CalculatorContainer.module.css";

const TableRecord = ({ title, children }) => {
  return (
    <div className={styles.tablerecord}>
      <p>{title}</p>
      <span type="text" className={styles.tabletext}>
        {children}
      </span>
    </div>
  );
};

export default TableRecord;
