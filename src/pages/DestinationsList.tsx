import React, { useContext } from "react";
import DestinationItem from "../components/DestinationItem/DestinationItem";
import { DestinationsContext } from "../context/DestinationsContext";

import "./DestinationsList.css";

const DestinationsList = () => {
  const contextValue = useContext(DestinationsContext);
  const { destinationList } = contextValue;
  return (
    <div className="destinationContainer">
      {destinationList &&
        destinationList.map((item, index) => (
          <DestinationItem destination={item} index={index} />
        ))}
    </div>
  );
};

export default DestinationsList;
