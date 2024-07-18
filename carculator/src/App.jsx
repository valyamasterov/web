import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar";
import CalculatorContainer from "./components/CalculatorContainer";
import ResultsContainer from "./components/ResultsContainer";
import FooterContainer from "./components/FooterContainer";

function App() {
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDriveTime, setTotalDriveTime] = useState(0);
  const [newWaitTime, setNewWaitTime] = useState(0);

  const resultsRef = useRef(null);

  const scrollToResults = () => {
    if (resultsRef.current) {
      window.scrollTo({
        top: resultsRef.current.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <NavBar />
      <CalculatorContainer
        totalDistance={totalDistance}
        setTotalDistance={setTotalDistance}
        totalDriveTime={totalDriveTime}
        setTotalDriveTime={setTotalDriveTime}
        newWaitTime={newWaitTime}
        setNewWaitTime={setNewWaitTime}
        scrollToResults={scrollToResults}
      />
      <ResultsContainer
        totalDistance={totalDistance}
        setTotalDistance={setTotalDistance}
        totalDriveTime={totalDriveTime}
        setTotalDriveTime={setTotalDriveTime}
        newWaitTime={newWaitTime}
        setNewWaitTime={setNewWaitTime}
        resultsRef={resultsRef}
      />
      <FooterContainer />
    </>
  );
}

export default App;
