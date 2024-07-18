import React from "react";
import styles from "./ResultsContainer.module.css";
import Button from "./Button";
import ResultCardTable from "./ResultCardTable";

const ResultCard = ({
  carImage,
  carModel,
  totalPrice,
  carLogo,
  pricePerMin,
  pricePerKm,
  startFee,
  carCompany,
  tariffName,
}) => {
  return (
    <div className={styles.resultcard}>
      <div className={styles.cardleft}>
        <div className={styles.resultcardheader}>
          <div className={styles.companylogo}>
            <img src={carLogo}></img>
          </div>
          <span>{carModel}</span>
        </div>
        <img src={carImage}></img>
        <span>{tariffName}</span>
      </div>
      <div className={styles.cardright}>
        <span className={styles.price}>{totalPrice + "€"}</span>
        <ResultCardTable
          startFee={startFee + "€"}
          priceMin={pricePerMin + "€"}
          priceKm={pricePerKm + "€"}
        />
        {carCompany === "Bolt Drive" ? (
          <Button type="bolt-button">Open App: Bolt</Button>
        ) : carCompany === "OXDrive" ? (
          <Button type="oxdrive-button">Open App: OX Drive</Button>
        ) : carCompany === "Carguru" ? (
          <Button type="carguru-button">Open App: Carguru</Button>
        ) : null}{" "}
      </div>
    </div>
  );
};

export default ResultCard;
