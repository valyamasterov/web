import React, { useState, useEffect } from "react";
import styles from "./CalculatorContainer.module.css";

const Calculator = ({ calculateDistance }) => {
  const [inputValue, setInputValue] = useState("");
  const [steps, setSteps] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [placeholder, setPlaceholder] = useState("Starting address");

  useEffect(() => {
    if (destination !== "") {
      calculateDistance(origin, destination);
    }
  }, [origin, destination]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddStep = () => {
    if (steps.length === 0) {
      setOrigin(inputValue);
    } else {
      setOrigin(steps[steps.length - 1].stepValue);
      setDestination(inputValue);
    }

    const newStep = {
      stepValue: inputValue,
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
    setPlaceholder("Next stop or final destination address");
    setInputValue("");
  };

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      return new Promise((resolve, reject) => {
        if (typeof google !== "undefined") {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAZZXEpOD9AUtM9k2f3u9ZPn-BzBXCFAvE&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    loadGoogleMapsAPI()
      .then(() => {
        const addressField = document.getElementById("addressField");
        const autocomplete = new google.maps.places.Autocomplete(addressField);
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          if (!place.geometry) {
            console.log("No details available for input: '" + place.name + "'");
            return;
          }
          setInputValue(place.formatted_address);
        });
      })
      .catch((error) => {
        console.error("Error loading Google Maps API:", error);
      });
  }, []);

  return (
    <div className={styles.calculatorform}>
      {steps.map((step, index) => (
        <div
          className={`${styles.routestep} ${
            index === steps.length - 1 ? styles.lastStep : ""
          }`}
          key={index}
        >
          <div>
            {index === 0 ? (
              <img src="images/first-step-icon.png" alt="First Step"></img>
            ) : index === steps.length - 1 ? (
              <img src="images/final-step-icon.png" alt="Final Step"></img>
            ) : (
              <img src="images/step-icon.png" alt="Step"></img>
            )}
          </div>
          <div className={styles.dashline}></div>

          <div>{step.stepValue}</div>
        </div>
      ))}
      <input
        type="text"
        id="addressField"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddStep}>Add</button>
    </div>
  );
};

export default Calculator;
