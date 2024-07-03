import { fetchProduct } from "@/types";
import { CMSSupaProduct } from "@/util/supabase";
import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";

export const GET = async (
  _request: Request,
  { params }: { params: { storeId: string } },
) => {
  const supabase = createClient();

  let { data: Products, error } = await supabase
    .from("Products")
    .select("*")
    .is("isFeatured", true)
    .eq("Owner", params.storeId);

  let products = Products || [];
  const info = CMSSupaProduct(products);

  const data: fetchProduct = { result: info };
  return NextResponse.json(data);
};
