import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [productData, setProductData] = useState(null);
  const [scanHistory, setScanHistory] = useState([]);

  return (
    <AppContext.Provider value={{ productData, setProductData, scanHistory }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);