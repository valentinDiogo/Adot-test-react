import React, { FormEvent, useContext, useState } from "react";
import ReactModal from "react-modal";
import { DestinationsContext } from "../../context/DestinationsContext";
import AppInput from "../AppInput/AppInput";
import ToggleButton from "../ToggleButton/ToggleButton";

import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    top: "50%",
    left: "50%",
    height: "50%",
    width: "40%",
    padding: "20px 25px",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    boxShadow: "",
  },
};

function Modal({ isOpen, setIsOpen }: ModalProps) {
  const [values, setValues] = useState({
    name: "",
    address: "",
    imgUrl: "",
    averageSalary: "",
    habitantsQuantity: "",
    hotelsQuantity: "",
    size: "",
  });
  const [status, setStatus] = useState(false);
  const contextValue = useContext(DestinationsContext);
  const { destinationList } = contextValue;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    contextValue.updateList([
      ...destinationList,
      {
        ...values,
        status,
      },
    ]);
    setValues({
      name: "",
      address: "",
      imgUrl: "",
      averageSalary: "",
      habitantsQuantity: "",
      hotelsQuantity: "",
      size: "",
    });
    setStatus(false);
    setIsOpen(false);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={() => console.log("")}
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <p className="modal-title">Ajouter une nouvelle destination</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="app-input"
          name="name"
          placeholder="Nom de la destination"
          type="text"
          value={values.name}
          onInput={(e) => setValues({ ...values, name: e.currentTarget.value })}
        />
        <input
          className="app-input"
          name="address"
          placeholder="Adresse"
          type="text"
          value={values.address}
          onChange={(e) =>
            setValues({ ...values, address: e.currentTarget.value })
          }
        />
        <input
          className="app-input"
          name="imgUrl"
          placeholder="Lien de l'image"
          type="text"
          value={values.imgUrl}
          onChange={(e) =>
            setValues({ ...values, imgUrl: e.currentTarget.value })
          }
        />
        <div style={{ display: "flex", gap: "10px", width: "100%" }}>
          <input
            className="app-input"
            name="habitantsQuantity"
            placeholder="Nb. Habitants"
            type="number"
            value={values.habitantsQuantity}
            onChange={(e) =>
              setValues({
                ...values,
                habitantsQuantity: e.currentTarget.value,
              })
            }
            step="0.1"
          />
          <input
            className="app-input"
            name="hotelsQuantity"
            placeholder="Nb. Hôtels"
            type="number"
            value={values.hotelsQuantity}
            onChange={(e) =>
              setValues({
                ...values,
                hotelsQuantity: e.currentTarget.value,
              })
            }
          />
          <input
            className="app-input"
            name="averageSalary"
            placeholder="Revenu Moy"
            type="number"
            value={values.averageSalary}
            onChange={(e) =>
              setValues({
                ...values,
                averageSalary: e.currentTarget.value,
              })
            }
          />
          <input
            className="app-input"
            name="size"
            placeholder="Superficie"
            type="number"
            step="0.01"
            value={values.size}
            onChange={(e) =>
              setValues({ ...values, size: e.currentTarget.value })
            }
          />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ToggleButton id="status" status={status} setStatus={setStatus} />
          <p style={{ margin: "0 0 0 10px", fontSize: "12px" }}>Activer</p>
        </div>
        <div className="buttons-container">
          <button
            className="modal-button cancel-button"
            onClick={() => setIsOpen(false)}
          >
            CANCEL
          </button>
          <button className="modal-button confirm-button">CONFIRM</button>
        </div>
      </form>
    </ReactModal>
  );
}

export default Modal;
