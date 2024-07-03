"use client";
import ProductGrid from "@/components/Products/ProductGrid";
import HomeCarousel from "./HomeCarousel";
import { useEffect, useState } from "react";
import HamsterLoader from "@/components/HamsterLoader";
import { notFound, useRouter } from "next/navigation";

export type Product = {
  title: string;
  image: string;
  id: string;
  price: number;
};

async function getProducts() {
  const path = window.location.origin + window.location.pathname;
  const bestResponse = await fetch(path + "/api/best", { cache: "no-store" });
  const productResponse = await fetch(path + "/api/product", {
    cache: "no-store",
  });

  const [bestInfo, productInfo] = await Promise.all([
    bestResponse,
    productResponse,
  ]);

  if (productInfo.status === 404) {
    return 404;
  }

  const [bestData, productData]: { result: Product[] }[] = await Promise.all([
    bestInfo.json(),
    productInfo.json(),
  ]);

  return { bestData, productData };
}

function Home() {
  const [isLoading, setLoading] = useState(true);
  const [bestData, setBest] = useState<{ result: Product[] }>();
  const [productData, setProduct] = useState<{ result: Product[] }>();
  const router = useRouter()

  useEffect(() => {
    const load = async () => {
      const data = await getProducts();
      if (data === 404) {
        const path = window.location.origin + window.location.pathname;
        router.push(path + "/not-found")
        return;
      }

      const { bestData, productData } = data;
      setBest(bestData);
      setProduct(productData);
      setLoading(false);
    };
    load();
  });

  return (
    <main className="flex w-full flex-col gap-3">
      {isLoading && (
        <>
          <HamsterLoader />
        </>
      )}
      {bestData! && productData! && (
        <>
          <HomeCarousel featuredItems={bestData.result} />
          <ProductGrid items={productData.result} />
        </>
      )}
    </main>
  );
}

export default Home;
