import { React } from "react";
import styles from "./CalculatorContainer.module.css";
import Button from "./Button";
import CalculatorTableContainer from "./CalculatorTableContainer";
import Calculator from "./Calculator";

const CalculatorContainer = ({
  totalDriveTime,
  totalDistance,
  newWaitTime,
  setNewWaitTime,
  setTotalDriveTime,
  setTotalDistance,
  scrollToResults,
}) => {
  const calculateDistance = (origin, destination) => {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: [destination],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      },
      function (response, status) {
        if (status == "OK") {
          var distance = response.rows[0].elements[0].distance.text;
          var distance = parseFloat(distance.replace(/[^\d.]/g, ""));
          var duration = response.rows[0].elements[0].duration.text;
          var duration = parseFloat(duration.replace(/[^\d.]/g, ""));
          setTotalDriveTime(totalDriveTime + duration);
          setTotalDistance(totalDistance + distance);
          console.log(response);
        }
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className="heroText">
        <h1>
          Find your car sharing at the <span>lowest price</span>
        </h1>
        <h3>All you have to do is choose where you want to go.</h3>
      </div>
      <Calculator calculateDistance={calculateDistance} />
      <Button type="search-cars" onClick={scrollToResults}>
        Show cars
      </Button>
      <img className={styles.arrows} src="/images/hero-arrows.png" />
      <CalculatorTableContainer
        totalDriveTime={totalDriveTime}
        totalDistance={totalDistance}
        newWaitTime={newWaitTime}
        setNewWaitTime={setNewWaitTime}
      />
    </div>
  );
};

export default CalculatorContainer;
