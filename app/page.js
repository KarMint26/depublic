import Footer from "@/components/custom/Footer";
import NavigationBar from "@/components/custom/NavigationBar";
import EventTicket from "@/components/homepage/EventTicket";
import Hero from "@/components/homepage/Hero";
import PopularBlog from "@/components/homepage/PopularBlog";

export default function Home() {
  return (
    <>
      <div className="homepage-container">
        <NavigationBar />
        <Hero />
        <EventTicket />
        <PopularBlog />
        <Footer />
      </div>
    </>
  );
}
