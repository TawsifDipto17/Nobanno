import React, { createContext, useContext, useState } from 'react';

const SelectedItemContext = createContext();

export const useSelectedItem = () => useContext(SelectedItemContext);

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('');

  const selectItem = (itemName) => {
    setSelectedItem(itemName);
  };

  return (
    <SelectedItemContext.Provider value={{ selectedItem, selectItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
