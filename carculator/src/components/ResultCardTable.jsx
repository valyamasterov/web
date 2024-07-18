import React from "react";
import styles from "./ResultsContainer.module.css";

const ResultCardTable = ({ startFee, priceMin, priceKm }) => {
  return (
    <div className={styles.resulttable}>
      <div>
        <p>
          Start Fee
          <br />
          <span>{startFee}</span>
        </p>
      </div>
      <div>
        <p>
          Time/min
          <br />
          <span>{priceMin}</span>
        </p>
      </div>
      <div>
        <p>
          Distance
          <br />
          <span>{priceKm}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultCardTable;
