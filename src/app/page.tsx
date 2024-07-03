import { StoreT } from "@/types";
import { createClient } from "@/util/supabase/client";
import Store from "@/components/Store"
import Link from "next/link";

async function Stores() {
  const supabase = createClient()
  let { data, error } = await supabase
  .from('Store')
  .select('*')

  if (error) {
    throw Error("Error occured", {cause: error})
  } 

  const store: StoreT[] = data ?? [];
  return store
}

async function Home() {
  const stores = await Stores();
  if (stores == null) {
    throw Error();
  }

  return (
    <main className="flex flex-col justify-between sm:mx-auto sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
      <header>
        <nav className="flex justify-between mb-6">
          <Link href={"/"} className="text-3xl font-bold italic">A1-services</Link>
        </nav>
      </header>
      <Store stores={stores}/>
    </main>
  );
}

export default Home;
