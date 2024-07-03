import HamsterLoader from "@/components/HamsterLoader";

function Loading() {
  return (
    <main className="flex flex-col justify-between sm:mx-auto sm:w-[620px] md:w-[720px] lg:w-[1000px] xl:w-[1200px]">
      <HamsterLoader />
    </main>
  );
}

export default Loading;
