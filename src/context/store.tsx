import { StoreT } from "@/types";
import { getStore } from "@/util/store";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

const initialStore: StoreT = {
  contacts: "",
  created_at: "",
  id: 0,
  image: null,
  name: "",
  owners: "",
};

const initial: { store: StoreT; setStore: Dispatch<SetStateAction<StoreT>> } = {
  store: initialStore,
  setStore: () => {},
};

export const store = createContext(initial);

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentStore, setStore] = useState(initialStore);

  useEffect(() => {
    const store = getStore();
    if (store) setStore(store);
  }, []);
  
  return (
    <store.Provider value={{ store: currentStore, setStore }}>
      {children}
    </store.Provider>
  );
};
