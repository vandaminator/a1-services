"use client";

import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { HiSearch } from "react-icons/hi";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Cart from "./Cart";
import Customer from "./Customer";
import { useParams, usePathname, useRouter } from "next/navigation";
import { store } from "@/context/store";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { storeId } = useParams<{ storeId: string }>();
  const {
    store: { name },
  } = useContext(store);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-background"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-primary md:hidden"
        />
        <NavbarBrand>
          <Link href={`/${storeId}`} onClick={() => setIsMenuOpen(false)}>
            <h1 className="text-2xl font-bold text-primary">{name}</h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <Input
          className="max-w-[200px] rounded"
          startContent={<HiSearch className="h-[18px] w-[18px] text-accent" />}
          onKeyDown={(event) => {
            if (event.key === "Enter")
              router.push(`/${storeId}/search?query=${search}`);
          }}
          value={search}
          onChange={(event) => {
            const value = event.currentTarget.value;
            setSearch(value);
          }}
        />
        <div className="max-md:hidden">
          <Cart />
        </div>
        <div className="max-md:hidden">
          <Customer />
        </div>
      </NavbarContent>
      <NavbarMenu className="bg-background">
        <NavbarMenuItem className="items-center">
          <div className="flex items-center justify-start gap-3">
            <Cart />
            <p>Cart</p>
          </div>
        </NavbarMenuItem>
        <NavbarMenuItem className="items-center">
          <div className="flex items-center justify-start gap-3">
            <Customer />
            <p>Customer</p>
          </div>
        </NavbarMenuItem>
        <NavbarMenuItem className="flex grow flex-col justify-end">
          <p>
            You will get a message from this WhatsApp number:+266 58967429 /+266
            62510192 Notifying you when to collect your finished order
          </p>
        </NavbarMenuItem>
        {/* {items! &&
          items.map((i) => (
            <NavbarMenuItem key={i.id}>
              <Link
                className="font-semibold text-primary"
                href={"/category/" + i.id}
              >
                {i.name}
              </Link>
            </NavbarMenuItem>
          ))} */}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavBar;
