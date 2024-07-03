import { StoreT } from "@/types";

export const getStore = () => {
  const store = localStorage.getItem("store");
  if (store) {
      const data: StoreT = JSON.parse(store);
      return data;
    } else {
        return null;
    }
};

export const setStore = (store: StoreT) => {
    localStorage.setItem("store", JSON.stringify(store))
}
