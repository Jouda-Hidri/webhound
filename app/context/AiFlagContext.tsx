"use client"; // Context is client-side

import { createContext, useContext, useState, ReactNode } from "react";

interface AiFlagContextType {
  aiFlag: boolean;
  setUseAi: (ai: boolean) => void;
}

const AiFlagContext = createContext<AiFlagContextType | undefined>(undefined);

export const AiFlagProvider = ({ children }: { children: ReactNode }) => {
  const [aiFlag, setUseAi] = useState(false); // default

  return (
    <AiFlagContext.Provider value={{ aiFlag, setUseAi }}>
      {children}
    </AiFlagContext.Provider>
  );
};

export const useAi = () => {
  const context = useContext(AiFlagContext);
  if (!context) throw new Error("useAi must be used within AiFlagProvider");
  return context;
};
