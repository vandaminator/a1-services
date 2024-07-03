import { Order } from "@/types";
import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";

export const POST = async (
  req: Request,
  { params }: { params: { storeId: string } },
) => {
  try {
    const { cart, phoneNumbers, price }: Partial<Order> = await req.json();

    if (cart === undefined)
      return new NextResponse("Cart is not defined", { status: 401 });
    if (price === undefined)
      return new NextResponse("price is not defined", { status: 401 });
    if (phoneNumbers === undefined)
      return new NextResponse("phoneNumbers is not defined", { status: 401 });

    const supabase = createClient();

    const { data, error } = await supabase
      .from("Orders")
      .insert([
        {
          products: cart,
          price,
          user: +phoneNumbers,
          owners: params.storeId,
        },
      ])
      .select();

    if (error) {
      throw Error("Creating order was not successfull", { cause: error });
    }

    return new NextResponse("The order has been made");
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
};
