import { StoreT } from "@/types";
import { createClient } from "@/util/supabase/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const supabase = createClient();

    let { data, error } = await supabase.from("Store").select("*");
    const store: StoreT[] = data ?? [];
    

    return NextResponse.json({ store });
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong", {
      status: 500,
      statusText: "something went wrong",
    });
  }
};
