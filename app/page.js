import Footer from "@/components/custom/Footer";
import EventTicket from "@/components/homepage/EventTicket";
import Hero from "@/components/homepage/Hero";
import PopularBlog from "@/components/homepage/PopularBlog";

export default function Home() {
  return (
    <>
      <div className="homepage-container">
        <Hero />
        <EventTicket />
        <PopularBlog />
        <Footer />
      </div>
    </>
  );
}
