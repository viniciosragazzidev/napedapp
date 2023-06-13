import { createContext, Dispatch, SetStateAction } from "react";
type AppContextType = {
  openMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
  openMenu: false,
  setOpenMenu: () => {},
});

export default AppContext;