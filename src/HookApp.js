import React, { useState } from "react";
import { RouterApp } from "./Router/Router";
import { UserContext} from "./Router/Context/UserContext"
import "./HookApp.scss"

export const HookApp = () => {
  const [user, setUser] = useState({from:'MainApp'});

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <RouterApp />
      </UserContext.Provider>
    </>
  );
};
