// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { CartProvider } from "@/context/cart";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "@/context/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NextUIProvider className="h-full">
        <SessionProvider>
          <StoreProvider>
            <CartProvider>{children}</CartProvider>
          </StoreProvider>
        </SessionProvider>
      </NextUIProvider>
      <Toaster />
    </>
  );
}
