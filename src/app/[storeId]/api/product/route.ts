import { Product, fetchProduct } from "@/types";
import { CMSSupaProduct } from "@/util/supabase";
import { createClient } from "@/util/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _request: NextRequest,
  { params }: { params: { storeId: string } },
) => {
  const supabase = createClient();

  let { data: Products, error } = await supabase.from("Products").select("*").eq("Owner", params.storeId);

  if (!Products || Products.length === 0) {
    return new NextResponse("No products", { status: 404, statusText: "No products" });
  }

  const info: Product[] = CMSSupaProduct(Products);

  const data: fetchProduct = { result: info };
  return NextResponse.json(data);
};
