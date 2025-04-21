import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [signal, setSignal] = useState("sine");
  const [transform, setTransform] = useState("傅里叶变换");
  const [param, setParam] = useState(0.5);

  return (
    <AppContext.Provider value={{ signal, setSignal, transform, setTransform, param, setParam }}>
      {children}
    </AppContext.Provider>
  );
}
