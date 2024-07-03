import { StoreT } from "@/types";

export const getStores = async () => {
  const baseUrl = process.env.NEXTAUTH_URL ?? "http://localhost:3000";
  const url = new URL("/api/store", baseUrl);
  const response = await fetch(new URL("/api/store", baseUrl));
  if (response.ok) {
    const data: { store: StoreT[] } = await response.json();
    return { data, error: null };
  } else {
    const { status, statusText } = response;
    return { data: null, error: { status, statusText } };
  }
};
