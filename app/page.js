import LoadingScreen from "@/components/custom/LoadingScreen";
import Hero from "@/components/homepage/Hero";

export default function Home() {
  return (
    <>
      <div className="wrapper flex justify-start items-center flex-col m-auto w-full h-fit Mobile-L:w-pwa bg-white overflow-x-hidden">
        <Hero />
      </div>
    </>
  );
}
