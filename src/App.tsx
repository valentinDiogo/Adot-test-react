import React, { useEffect } from "react";
import {
  DestinationsContext,
  DestinationContextType,
} from "./context/DestinationsContext";
import useLocalStorage from "./hooks/useLocalStorage";

import Header from "./components/Header/Header";
import DestinationsList from "./pages/DestinationsList";

import "./App.css";

const destinations = [
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: false,
  },
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: true,
  },
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: false,
  },
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: true,
  },
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: false,
  },
  {
    name: "Copenhagen",
    address: "Rådhuspladsen 1, 1550 København, Denmark",
    imgUrl:
      "https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/europe/denmark/copenhagen/destinations-copenhagen-banner-mobile-1024x553.jpg",
    habitantsQuantity: 3.4,
    hotelsQuantity: 5000,
    size: 88.25,
    averageSalary: 70000,
    status: true,
  },
];

function App() {
  const [destinationsList, SetDestinationsList] = useLocalStorage(
    "destinations",
    []
  );
  const contextValue: DestinationContextType = {
    destinationList: destinationsList,
    updateList: SetDestinationsList,
  };

  useEffect(() => {
    contextValue.updateList([...destinations]);
  }, []);

  return (
    <DestinationsContext.Provider value={contextValue}>
      <div className="container">
        <Header />

        <DestinationsList />
      </div>
    </DestinationsContext.Provider>
  );
}

export default App;
