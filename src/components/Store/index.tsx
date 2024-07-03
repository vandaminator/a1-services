"use client";
import { StoreT } from "@/types";
import StoreCard from "./Card";

type Props = {
  stores: StoreT[];
};

const Store = ({ stores }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stores.map((s) => (
        <StoreCard store={s} key={s.id} />
      ))}
    </div>
  );
};

export default Store;
