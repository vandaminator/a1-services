"use client";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product, fetchProduct } from "@/types";
import ProductGrid from "@/components/Products/ProductGrid";
import HamsterLoader from "@/components/HamsterLoader";

function SearchPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [isError, setisError] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const { storeId } = useParams<{ storeId: string }>();

  const query = searchParams.get("query") || "";

  const notAvaliable = products === undefined || products.length === 0;

  useEffect(() => {
    const load = async () => {
      const url = `/${storeId}/api/product/search?query=${query}`;
      const response = await fetch(url, { cache: "no-cache" });

      if (response.ok) {
        const data: fetchProduct = await response.json();
        setProducts(data.result);
        setisLoading(false);
      } else {
        setisError(true);
      }
    };
    load();
  }, [query, storeId]);

  const show = (
    <>
      {!isError ? (
        <>
          {!notAvaliable ? (
            <>
              <ProductGrid items={products} />
            </>
          ) : (
            <>No products</>
          )}
        </>
      ) : (
        <>Something went wrong</>
      )}
    </>
  );

  return <>{isLoading ? <HamsterLoader /> : show}</>;
}

export default SearchPage;
