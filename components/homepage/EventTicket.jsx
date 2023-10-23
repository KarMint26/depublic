import SliderEvent from "../custom/SliderEvent";
import UpcomingEvent from "../custom/UpcomingEvent";

const CarouselImages = [
  {
    id: 1,
    url: "/assets/events/ticket-images.png",
    alt: "event-1",
  },
  {
    id: 2,
    url: "/assets/events/ticket-images-2.png",
    alt: "event-2",
  },
  {
    id: 3,
    url: "/assets/events/ticket-images-3.png",
    alt: "event-3",
  },
  {
    id: 4,
    url: "/assets/events/ticket-images-4.png",
    alt: "event-4",
  },
];

const upcomingEventData = [
  {
    id: 1,
    titleEvent: "Konser Maher Zain",
    shortDesc: "Konser Silahturahmi oleh Maher Zain",
    imagePath: "/assets/events/ticket-images.png",
    alt: "upcoming-event",
    city: "BANDUNG",
    tgl: "Sabtu, Juni 22",
    ticketPrice: "IDR 1.299.999",
  },
  {
    id: 2,
    titleEvent: "Festival Musik 2023",
    shortDesc: "Festival Musik oleh Band Ternama",
    imagePath: "/assets/events/ticket-images-2.png",
    alt: "upcoming-event-2",
    city: "SEMARANG",
    tgl: "Selasa, Agustus 23",
    ticketPrice: "IDR 1.099.999",
  },
  {
    id: 3,
    titleEvent: "Charity Concert",
    shortDesc: "Konser untuk berbagi kebahagiaan",
    imagePath: "/assets/events/ticket-images-3.png",
    alt: "upcoming-event-3",
    city: "MANADO",
    tgl: "Minggu, Agustus 31",
    ticketPrice: "IDR 800.000",
  },
  {
    id: 4,
    titleEvent: "Arrowai Music Concert",
    shortDesc: "Konser Musik dari Arrowai Industri",
    imagePath: "/assets/events/ticket-images-4.png",
    alt: "upcoming-event-4",
    city: "JAKARTA",
    tgl: "Rabu, Maret 18",
    ticketPrice: "IDR 2.499.999",
  },
];

export default function EventTicket() {
  return (
    <>
      <div className="event-container">
        <SliderEvent carouselImage={CarouselImages} />
        <UpcomingEvent upcomingEventData={upcomingEventData} />
      </div>
    </>
  );
}
