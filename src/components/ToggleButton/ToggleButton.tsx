import React, { useEffect, useState, useContext, FormEvent } from "react";
import {
  Destination,
  DestinationContextType,
  DestinationsContext,
} from "../../context/DestinationsContext";

import "./ToggleButton.css";

interface ToggleButtonProps {
  id?: string;
  setStatus?: (status: boolean) => void;
  status?: boolean;
}

const ToggleButton = ({ id, setStatus, status }: ToggleButtonProps) => {
  const contextValue = useContext<DestinationContextType>(DestinationsContext);
  const { destinationList, updateList } = contextValue;
  const [toggleValue, setToggleValue] = useState<boolean>(status || false);
  const handleChange = (e: FormEvent) => {
    e.preventDefault();
    setToggleValue(!toggleValue);
  };
  useEffect(() => {
    if (setStatus) {
      setStatus(toggleValue);
    }
    if (id) {
      let existingCity = destinationList
        .map((dest: Destination): string | null => dest.name)
        .indexOf(id);
      if (existingCity >= 0) {
        let new_arr: Destination[] = [...destinationList];
        new_arr[existingCity].status = toggleValue;
        updateList(new_arr);
      }
    }
  }, [toggleValue]);
  return (
    <div
      className="toggle-container"
      style={{
        backgroundColor: toggleValue ? "rgba(47,203,153, 0.5)" : "#bbb",
      }}
    >
      <button
        data-testid="desactivate-btn"
        id="desactivate"
        className="toggle-button-disable"
        style={{
          opacity: toggleValue ? 0 : 1,
          backgroundColor: toggleValue ? undefined : "#eee",
        }}
        onClick={handleChange}
      />
      <button
        data-testid="activate-btn"
        id="activate"
        className="toggle-button-enable"
        style={{
          opacity: toggleValue ? 1 : 0,
          backgroundColor: toggleValue ? "#2FCB99" : undefined,
        }}
        onClick={handleChange}
      />
    </div>
  );
};

export default ToggleButton;
