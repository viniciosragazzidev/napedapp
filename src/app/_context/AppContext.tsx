'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";
type AppContextType = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  openMenu: false,
  setOpenMenu: () => {},
});

// Create a component AppContextProvider typend the chindren
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
