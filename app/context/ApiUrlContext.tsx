"use client"; // Context is client-side

import { createContext, useContext, useState, ReactNode } from "react";

interface ApiUrlContextType {
  apiUrl: string;
  setApiUrl: (url: string) => void;
}

const ApiUrlContext = createContext<ApiUrlContextType | undefined>(undefined);

export const ApiUrlProvider = ({ children }: { children: ReactNode }) => {
  const [apiUrl, setApiUrl] = useState("https://jsonplaceholder.typicode.com/users"); // default

  return (
    <ApiUrlContext.Provider value={{ apiUrl, setApiUrl }}>
      {children}
    </ApiUrlContext.Provider>
  );
};

export const useApiUrl = () => {
  const context = useContext(ApiUrlContext);
  if (!context) throw new Error("useApiUrl must be used within ApiUrlProvider");
  return context;
};
