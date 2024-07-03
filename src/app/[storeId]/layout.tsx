import NavBar from "@/components/Navbar";

function StoreLayout({
  children,
  params: { storeId },
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  return (
    <>
      <NavBar />
      <main className="m-3 flex flex-col justify-between sm:mx-auto sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
        {children}
      </main>
      <footer className="px-5 pb-10 pt-20">
        <p>
          You will get a message from this WhatsApp number:+266 58967429 / +266
          62510193 Notifying you when to collect your finished order
        </p>
      </footer>
    </>
  );
}

export default StoreLayout;
