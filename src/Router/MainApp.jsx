import React, { useState } from "react";
import { UserContext } from "./Context/UserContext";
import { RouterApp } from "./Router";

export const MainApp = () => {
  const [user, setUser] = useState({from:'MainApp'});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterApp />
      </UserContext.Provider>
    </>
  );
};
