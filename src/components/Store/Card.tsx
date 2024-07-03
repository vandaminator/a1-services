"use client";
import { StoreT } from "@/types";
import { setStore } from "@/util/store";
import { Button, Link } from "@nextui-org/react";

type Props = {
  store: StoreT;
};

const StoreCard = ({ store }: Props) => {
  const { name, owners } = store;
  return (
    <div className="space-y-3 rounded p-4 outline outline-primary m-2">
      <h3 className="text-xl">{name}</h3>
      <Button
        href={`/${owners}`}
        className="rounded p-3"
        onClick={() => setStore(store)}
        as={Link}
      >
        View Store
      </Button>
    </div>
  );
};

export default StoreCard;
