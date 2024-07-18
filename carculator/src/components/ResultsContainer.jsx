import styles from "./ResultsContainer.module.css";
import ResultCard from "./ResultCard";
import cardata from "./cardata.json";
import React, { useEffect, useState, useRef } from "react";

const ResultsContainer = ({
  totalDistance,
  totalDriveTime,
  newWaitTime,
  resultsRef,
}) => {
  const [carData, setCarData] = useState(null);

  const getCompanyLogo = (company) => {
    switch (company) {
      case "Bolt Drive":
        return "images/logos/bolt-logo.png";
      case "OXDrive":
        return "images/logos/oxdrive-logo.png";
      case "Carguru":
        return "images/logos/carguru-logo.png";
    }
  };

  const getCarImage = (model) => {
    switch (model) {
      case "Toyota Yaris":
        return "images/cars/toyota-yaris.png";
      case "Audi A1":
        return "images/cars/audi-a1.png";
      case "Peugot 208":
        return "images/cars/peugeot-208.png";
      case "Skoda Fabia":
        return "images/cars/skoda-fabia.png";
      case "Toyota Corolla":
        return "images/cars/toyota-corolla.png";
      case "Audi A3":
        return "images/cars/audi-a3.png";
      case "Hyundai Bayon":
        return "images/cars/hyundai-bayon.png";
      case "Peugeot 2008":
        return "images/cars/peugeot-2008.png";
      case "Audi Q2":
        return "images/cars/audi-q2.png";
      case "Toyota Yaris Cross":
        return "images/cars/toyota-yaris-cross.png";
      case "VW T-Cross":
        return "images/cars/vw-t-cross.png";
      case "Toyota C-HR":
        return "images/cars/toyota-c-hr.png";
      case "Opel Crossland":
        return "images/cars/opel-crossland.png";
      case "Audi A5":
        return "images/cars/audi-a5.png";
      case "Audi A4":
        return "images/cars/audi-a4.png";
      case "BMW 4 Convertible":
        return "images/cars/bmw-4-convertible.png";
      case "VW T-Roc Cabrio":
        return "images/cars/vw-t-roc-cabrio.png";
      case "Audi e-tron":
        return "images/cars/audi-e-tron.png";
      case "Toyota Land Cruiser":
        return "images/cars/toyota-land-cruiser.png";
      case "VW Crafter":
        return "images/cars/vw-crafter.png";
      case "Toyota Rav4":
        return "images/cars/toyota-rav4.png";
      case "Nissan Qashqai":
        return "images/cars/nissan-qashqai.png";
      case "VW Passat":
        return "images/cars/vw-passat.png";
      case "Nissan Juke":
        return "images/cars/nissan-juke.png";
      case "Tesla Model 3 Standard Range +":
        return "images/cars/tesla-model-3.png";
      case "Tesla Model 3 Long Range":
        return "images/cars/tesla-model-3.png";
      case "Tesla Model 3 Performance":
        return "images/cars/tesla-model-3.png";
      case "Tesla Model Y Standard Range":
        return "images/cars/tesla-model-y.png";
      case "Tesla Model Y Long Range":
        return "images/cars/tesla-model-y.png";
      case "Tesla Model Y Performance":
        return "images/cars/tesla-model-y.png";
      case "Tesla Model S Standard Range":
        return "images/cars/tesla-model-y.png";
      case "Tesla Model S Performance":
        return "images/cars/tesla-model-s.png";
      case "Tesla Model X Performance":
        return "images/cars/tesla-model-x.png";
      case "Skoda Kamiq":
        return "images/cars/skoda-kamiq.png";
      case "BMW 118i":
        return "images/cars/bmw-118i.png";
      case "Jeep Compass":
        return "images/cars/jeep-compass.png";
      case "Ford Focus Wagon":
        return "images/cars/ford-focus-wagon.png";
      case "Ford Focus":
        return "images/cars/ford-focus.png";
      case "VW Taigo":
        return "images/cars/vw-taigo.png";
      case "Seat Ateca":
        return "images/cars/seat-ateca.png";
      case "Peugeot 308":
        return "images/cars/peugeot-308.png";
      case "Skoda Karoq":
        return "images/cars/skoda-karoq.png";
      case "Ford Puma":
        return "images/cars/ford-puma.png";
      case "Toyota Corolla Touring":
        return "images/cars/toyota-corolla-touring.png";
      case "Opel Mokka":
        return "images/cars/opel-mokka.png";
      case "VW T-Roc R-Line":
        return "images/cars/vw-t-roc-r-line.png";
      case "Kia Sportage":
        return "images/cars/kia-sportage.png";
      case "Ford Kuga":
        return "images/cars/ford-kuga.png";
      case "Renault Arkana":
        return "images/cars/renault-arkana.png";
        break;
      case "VW Tiguan":
        return "images/cars/vw-tiguan.png";
      case "Renault Master":
        return "images/cars/renault-master.png";
      case "Ford Transit":
        return "images/cars/ford-transit.png";
      case "Renault Zoe":
        return "images/cars/renault-zoe.png";
    }
  };

  useEffect(() => {
    setCarData(cardata);
    console.log(totalDistance);
  }, []);

  useEffect(() => {
    // Update the car data whenever any of these props change
    setCarData(cardata);
    console.log(totalDistance);
  }, [totalDistance, totalDriveTime, newWaitTime]);

  return (
    <div className={styles.container} id="results" ref={resultsRef}>
      {carData &&
        carData
          .map((car, index) => {
            // Carguru Calculations
            if (car.Company === "Carguru") {
              var totalTime = parseInt(totalDriveTime) + parseInt(newWaitTime);
              var totalPrice = 0;
              var adjustedDistance = 0;

              if (car.TariffName.trim() === "Basic") {
                if (totalDistance > 100) {
                  adjustedDistance = totalDistance - 100;
                } else {
                  adjustedDistance = 0;
                }
                if (
                  (car.Day1 * 180) / car.H3 <= totalTime &&
                  car.Day1 < car.H3 + H1 * 2 + (totalTime - 300) * car.Min1
                ) {
                  totalPrice = car.Day1 + adjustedDistance * car.Km1;
                } else if (
                  (car.H3 + car.H1 * 2) / car.Min1 <= totalTime &&
                  car.H3 + car.H1 * 2 <
                    car.H3 + car.H1 + (totalTime - 240) * car.Min1
                ) {
                  totalPrice = car.H3 + car.H1 * 2 + adjustedDistance * car.Km1;
                  if (totalTime > 300) {
                    totalPrice += car.Min1 * (totalTime - 300);
                  }
                } else if (
                  (car.H3 + car.H1) / car.Min1 <= totalTime &&
                  car.H3 + car.H1 < car.H3 + (totalTime - 180) * car.Min1
                ) {
                  totalPrice = car.H3 + car.H1 + adjustedDistance * car.Km1;
                  if (totalTime > 240) {
                    totalPrice += car.Min1 * (totalTime - 240);
                  }
                } else if (
                  car.H3 / car.Min1 <= totalTime &&
                  car.H3 < car.H1 * 2 + (totalTime - 120) * car.Min1
                ) {
                  totalPrice = car.H3 + adjustedDistance * car.Km1;
                  if (totalTime > 180) {
                    totalPrice += car.Min1 * (totalTime - 180);
                  }
                } else if (
                  (car.H1 * 2) / car.Min1 <= totalTime &&
                  car.H1 * 2 < car.H1 + (totalTime - 60) * car.Min1
                ) {
                  totalPrice = car.H1 * 2 + adjustedDistance * car.Km1;
                  if (totalTime > 120) {
                    totalPrice += car.Min1 * (totalTime - 120);
                  }
                } else if (car.H1 / car.Min1 <= totalTime) {
                  totalPrice = car.H1 + adjustedDistance * car.Km1;
                  if (totalTime > 60) {
                    totalPrice += car.Min1 * (totalTime - 60);
                  }
                } else {
                  totalPrice =
                    totalTime * car.Min1 + adjustedDistance * car.Km1;
                }
                if (totalPrice < car.MinimumTripPrice) {
                  totalPrice = car.MinimumTripPrice;
                }
                totalPrice = totalPrice.toFixed(2);
                return { car, index, totalPrice };
              }
              if (car.TariffName.trim() === "Split Basic") {
                adjustedDistance = totalDistance;
                if (
                  (car.Day1 * 60) / car.H1 <= totalTime &&
                  car.Day1 < car.H1 * 5 + (totalTime - 300) * car.Min1
                ) {
                  totalPrice = car.Day1 + adjustedDistance * car.Km1;
                } else if (
                  (car.H1 * 5) / car.Min1 <= totalTime &&
                  car.H1 * 5 < car.H1 * 4 + (totalTime - 240) * car.Min1
                ) {
                  totalPrice = car.H1 * 5 + adjustedDistance * car.Km1;
                  if (totalTime > 300) {
                    totalPrice += car.Min1 * (totalTime - 300);
                  }
                } else if (
                  (car.H1 * 4) / car.Min1 <= totalTime &&
                  car.H1 * 4 < car.H1 * 3 + (totalTime - 180) * car.Min1
                ) {
                  totalPrice = car.H1 * 4 + adjustedDistance * car.Km1;
                  if (totalTime > 240) {
                    totalPrice += car.Min1 * (totalTime - 240);
                  }
                } else if (
                  (car.H1 * 3) / car.Min1 <= totalTime &&
                  car.H1 * 3 < car.H1 * 2 + (totalTime - 120) * car.Min1
                ) {
                  totalPrice = car.H1 * 3 + adjustedDistance * car.Km1;
                  if (totalTime > 180) {
                    totalPrice += car.Min1 * (totalTime - 180);
                  }
                } else if (
                  (car.H1 * 2) / car.Min1 <= totalTime &&
                  car.H1 * 2 < car.H1 + (totalTime - 60) * car.Min1
                ) {
                  totalPrice = car.H1 * 2 + adjustedDistance * car.Km1;
                  if (totalTime > 120) {
                    totalPrice += car.Min1 * (totalTime - 120);
                  }
                } else if (car.H1 / car.Min1 <= totalTime) {
                  totalPrice = car.H1 + adjustedDistance * car.Km1;
                  if (totalTime > 60) {
                    totalPrice += car.Min1 * (totalTime - 60);
                  }
                } else {
                  totalPrice =
                    totalTime * car.Min1 + adjustedDistance * car.Km1;
                }
                if (totalPrice < car.MinimumTripPrice) {
                  totalPrice = car.MinimumTripPrice;
                }
                totalPrice = totalPrice.toFixed(2);
                return { car, index, totalPrice };
              }
            }

            // Bolt Drive Calculations
            if (car.Company === "Bolt Drive") {
              var totalTime = parseInt(totalDriveTime) + parseInt(newWaitTime);
              var totalPrice = 0;
              if (
                (car.Day1 / car.H1) * 60 <= totalTime &&
                car.Day1 < car.H1 * 5 + (totalTime - 300) * car.Min1
              ) {
                totalPrice = car.Day1 + car.Km1 * totalDistance;
              } else if (
                (car.H1 * 5) / car.Min1 <= totalTime &&
                car.H1 * 5 < car.H1 * 4 + (totalTime - 240) * car.Min1
              ) {
                totalPrice = car.H1 * 5 + totalDistance * car.Km1;
                if (totalTime > 300) {
                  totalPrice += car.Min1 * (totalTime - 300);
                }
              } else if (
                (car.H1 * 4) / car.Min1 <= totalTime &&
                car.H1 * 4 < car.H1 * 3 + (totalTime - 180) * car.Min1
              ) {
                totalPrice = car.H1 * 4 + totalDistance * car.Km1;
                if (totalTime > 240) {
                  totalPrice += car.Min1 * (totalTime - 240);
                }
              } else if (
                (car.H1 * 3) / car.Min1 <= totalTime &&
                car.H1 * 3 < car.H1 * 2 + (totalTime - 120) * car.Min1
              ) {
                totalPrice = car.H1 * 3 + totalDistance * car.Km1;
                if (totalTime > 180) {
                  totalPrice += car.Min1 * (totalTime - 180);
                }
              } else if (
                (car.H1 * 2) / car.Min1 <= totalTime &&
                car.H1 * 2 < car.H1 + (totalTime - 60) * car.Min1
              ) {
                totalPrice = car.H1 * 2 + totalDistance * car.Km1;
                if (totalTime > 120) {
                  totalPrice += car.Min1 * (totalTime - 120);
                }
              } else if (car.H1 / car.Min1 <= totalTime) {
                totalPrice = car.H1 + totalDistance * car.Km1;
                if (totalTime > 60) {
                  totalPrice += car.Min1 * (totalTime - 60);
                }
              } else {
                totalPrice = totalTime * car.Min1 + totalDistance * car.Km1;
              }
              if (totalPrice < car.MinimumTripPrice) {
                totalPrice = car.MinimumTripPrice;
              }
              totalPrice = totalPrice.toFixed(2);
              return { car, index, totalPrice };
            }

            // Citybee Calculations
            if (
              car.Company === "Citybee" &&
              car.CarModel !== "Toyota Yaris Cross" &&
              car.CarModel !== "VW T-Roc" &&
              car.CarModel !== "Toyota Rav4" &&
              car.CarModel !== "Hyundai i20" &&
              car.CarModel !== "Renault Clio" &&
              car.CarModel !== "Skoda Fabia" &&
              car.CarModel !== "Toyota Yaris" &&
              car.CarModel !== "Renault Captur" &&
              car.CarModel !== "Renault Captur" &&
              car.CarModel !== "Toyota Corolla Crossover" &&
              car.CarModel !== "VW Tiguan Diesel" &&
              car.CarModel !== "Nissan Juke" &&
              car.CarModel !== "MAN TGE"
            ) {
              var totalTime = parseInt(totalDriveTime) + parseInt(newWaitTime);
              var totalPrice = 0;
            }

            // OXDrive Calculations
            if (car.Company === "OXDrive") {
              var totalTime = parseInt(totalDriveTime) + parseInt(newWaitTime);
              var totalPrice = 0;
              if (
                (car.Day1 / car.H1) * 60 <= totalTime &&
                car.Day1 < car.H1 * 6 + (totalTime - 360) * car.Min1
              ) {
                totalPrice = car.Day1 + totalDistance * car.Km1;
              } else if (
                (car.H1 * 6) / car.Min1 <= totalTime &&
                car.H1 * 6 < car.H1 * 5 + (totalTime - 300) * car.Min1
              ) {
                totalPrice = car.H1 * 6 + totalDistance * car.Km1;
                if (totalTime > 360) {
                  totalPrice += car.Min1 * (totalTime - 360);
                }
              } else if (
                (car.H1 * 5) / car.Min1 <= totalTime &&
                car.H1 * 5 < car.H1 * 4 + (totalTime - 240) * car.Min1
              ) {
                totalPrice = car.H1 * 5 + totalDistance * car.Km1;
                if (totalTime > 300) {
                  totalPrice += car.Min1 * (totalTime - 300);
                }
              } else if (
                (car.H1 * 4) / car.Min1 <= totalTime &&
                car.H1 * 4 < car.H1 * 3 + (totalTime - 180) * car.Min1
              ) {
                totalPrice = car.H1 * 4 + totalDistance * car.Km1;
                if (totalTime > 240) {
                  totalPrice += car.Min1 * (totalTime - 240);
                }
              } else if (
                (car.H1 * 3) / car.Min1 <= totalTime &&
                car.H1 * 3 < car.H1 * 2 + (totalTime - 120) * car.Min1
              ) {
                totalPrice = car.H1 * 3 + totalDistance * car.Km1;
                if (totalTime > 180) {
                  totalPrice += car.Min1 * (totalTime - 180);
                }
              } else if (
                (car.H1 * 2) / car.Min1 <= totalTime &&
                car.H1 * 2 < car.H1 + (totalTime - 60) * car.Min1
              ) {
                totalPrice = car.H1 * 2 + totalDistance * car.Km1;
                if (totalTime > 120) {
                  totalPrice += car.Min1 * (totalTime - 120);
                }
              } else if (car.H1 / car.Min1 <= totalTime) {
                totalPrice = car.H1 + totalDistance * car.Km1;
                if (totalTime > 60) {
                  totalPrice += car.Min1 * (totalTime - 60);
                }
              } else {
                totalPrice = totalTime * car.Min1 + totalDistance * car.Km1;
              }
              totalPrice = totalPrice.toFixed(2);
              return { car, index, totalPrice };
            }
            return null; // Filter out cars not from "Bolt Drive", "Carguru", or "Citybee" companies
          })
          .filter((carData) => carData !== null) // Filter out null values from previous step
          .sort((a, b) => parseFloat(a.totalPrice) - parseFloat(b.totalPrice)) // Sort by totalPrice
          .map((carData, index) => (
            <ResultCard
              key={carData.index}
              carImage={getCarImage(carData.car.CarModel)}
              carLogo={getCompanyLogo(carData.car.Company)}
              carModel={carData.car.CarModel}
              carCompany={carData.car.Company}
              totalPrice={carData.totalPrice}
              pricePerMin={carData.car.Min1.toFixed(2)}
              pricePerKm={carData.car.Km1.toFixed(2)}
              startFee={carData.car.TripStartFee.toFixed(2)}
              tariffName={carData.car.TariffName}
            />
          ))}
    </div>
  );
};

export default ResultsContainer;
