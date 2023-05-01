import React, { useEffect } from "react";
import { v4 as uuid } from "uuid";

export const UserDataContext = React.createContext();

export const UserDataContextProvider = (props) => {
  const [userData, setUserData] = React.useState(
    () =>
      JSON.parse(localStorage.getItem("userData")) || [
        { id: 0, userName: "admin", role: "Admin" },
      ]
  );

  useEffect(() => {
    localStorage.setItem(
      "userData",
      JSON.stringify(userData || [{ id: 0, userName: "admin", role: "Admin" }])
    );
  }, [userData]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </UserDataContext.Provider>
  );
};
