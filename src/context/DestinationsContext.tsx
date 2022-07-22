import React from "react";

export interface Destination {
  name: string;
  address: string;
  imgUrl: string;
  habitantsQuantity: number | string;
  hotelsQuantity: number | string;
  averageSalary: number | string;
  size: number | string;
  status: boolean;
}

export type DestinationContextType = {
  destinationList: Destination[];
  updateList: (destinationList: Destination[]) => void;
};

export const DestinationsContext = React.createContext<DestinationContextType>({
  destinationList: [],
  updateList: () => {},
});
