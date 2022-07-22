import React from "react";
import { Destination } from "../../context/DestinationsContext";
import ToggleButton from "../ToggleButton/ToggleButton";

import "./DestinationItem.css";

type DestinationItemProps = {
  destination: Destination;
  index: number;
};

function DestinationItem({ destination, index }: DestinationItemProps) {
  return (
    <div className="destinationCard" key={index}>
      <div className="destinationImgContainer">
        <img src={destination.imgUrl} className="destinationImg" />
      </div>
      <div className="destinationCardDescription">
        <div>
          <p className="cardTitle">{destination.name}</p>
          <p className="cardSubtitle">{destination.address}</p>
        </div>
        <ToggleButton id={destination.name} status={destination.status} />
      </div>
      <div className="destinationCardInformations">
        <div>
          <p>{destination.habitantsQuantity} M</p>
          <p>Habitants</p>
        </div>
        <div>
          <p>{destination.hotelsQuantity}</p>
          <p>Hôtels</p>
        </div>
        <div>
          <p>{destination.averageSalary} €</p>
          <p>Revenu Moy</p>
        </div>
        <div>
          <p>{destination.size}</p>
          <p>km²</p>
        </div>
      </div>
    </div>
  );
}

export default DestinationItem;
