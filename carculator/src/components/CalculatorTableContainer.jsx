import React, { useState } from "react";
import styles from "./CalculatorContainer.module.css";
import TableRecord from "./TableRecord";

const CalculatorTableContainer = ({
  totalDriveTime,
  totalDistance,
  newWaitTime,
  setNewWaitTime,
}) => {
  const [isEditingWaitTime, setIsEditingWaitTime] = useState(false);

  const handleEditWaitTime = () => {
    setIsEditingWaitTime(true);
  };

  const handleSaveWaitTime = () => {
    setIsEditingWaitTime(false);
    // Save new wait time value
    // You can perform any necessary validation here
    // For now, let's assume you have a function setTotalWaitTime to update the state
    setNewWaitTime(newWaitTime);
  };

  const handleCancelEdit = () => {
    setIsEditingWaitTime(false);
    // Reset new value if canceling edits
    setNewWaitTime(0); // Reset wait time to 0
  };

  return (
    <div className={styles.tablecontainer}>
      <TableRecord title="Distance">{totalDistance.toFixed(1)}km</TableRecord>
      <TableRecord title="Drive time">
        {totalDriveTime.toFixed(0)}min
      </TableRecord>
      <TableRecord title="Wait time">
        {isEditingWaitTime ? (
          <>
            <input
              type="text"
              value={newWaitTime}
              onChange={(e) => setNewWaitTime(e.target.value)}
            />
            <button onClick={handleSaveWaitTime}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </>
        ) : (
          <>
            <span>{newWaitTime}min</span>
            <button onClick={handleEditWaitTime}>
              <img src="/images/pencil.png"></img>
            </button>
          </>
        )}
      </TableRecord>
    </div>
  );
};

export default CalculatorTableContainer;
