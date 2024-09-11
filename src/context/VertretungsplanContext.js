// src/context/VertretungsplanContext.js
import { createContext, useContext, useState, useEffect } from "react";
import fetchVertretungsplan from "../functions/fetchVertretungsplan";

const VertretungsplanContext = createContext();

export const useVertretungsplan = () => useContext(VertretungsplanContext);

export const VertretungsplanProvider = ({ children }) => {
  const [data_1, setData_1] = useState({});
  const [data_2, setData_2] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchVertretungsplan().then((r) => {
      setData_1(r[0]);
      setData_2(r[1]);
      setError(r[0]?.title === undefined || r[1]?.title === undefined);
    });
  }, []);

  return (
    <VertretungsplanContext.Provider value={{ data_1, data_2, error }}>
      {children}
    </VertretungsplanContext.Provider>
  );
};
