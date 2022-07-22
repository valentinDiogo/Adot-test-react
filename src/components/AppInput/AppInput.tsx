import React from "react";

import "./AppInput.css";

type AppInputProps = {
  name: string;
  placeholder: string;
  type: string;
  value: any;
  setValue: (value: any) => void;
};

function AppInput({ name, type, placeholder, value, setValue }: AppInputProps) {
  return (
    <input
      className="app-input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onInput={(e) => setValue(e.currentTarget.value)}
    />
  );
}

export default AppInput;
