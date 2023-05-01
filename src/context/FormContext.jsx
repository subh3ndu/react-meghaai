import React, { useState, createContext } from "react";
import { v4 as uuid } from "uuid";

export const FormContext = createContext();

export const FormContextProvider = (props) => {
  const [formData, setFormData] = useState({
    id: uuid(),
    userName: "",
    email: "",
    phone: "",
    password: "",
    role: "User",
    confirmPassword: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {props.children}
    </FormContext.Provider>
  );
};
