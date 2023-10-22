import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const featuresData = [
  {
    name: "Ticket",
    image: "/assets/features/features-1.png",
  },
  {
    name: "Registration",
    image: "/assets/features/features-2.png",
  },
  {
    name: "Booking",
    image: "/assets/features/features-3.png",
  },
  {
    name: "Store",
    image: "/assets/features/features-4.png",
  },
];

export default function BoxFeatures() {
  return (
    <>
      <div className="features-box">
        <div className="box-arrow -right-[0.5rem] Mobile-L:-right-[1rem]">
          <IoIosArrowForward className="text-lg Mobile-L:text-xl" />
        </div>
        <div className="box-arrow -left-[0.5rem] Mobile-L:-left-[1rem]">
          <IoIosArrowForward className="text-lg Mobile-L:text-xl rotate-180" />
        </div>
        {featuresData.map((data) => (
          <>
            <div className="feat flex justify-center items-center flex-col gap-2 Mobile-L:gap-3 cursor-pointer">
              <Image
                src={data.image}
                alt="features-image"
                width={50}
                height={50}
                className="Mobile-L:scale-100 scale-[0.80]"
              />
              <h1 className="text-xs Mobile-L:text-sm font-medium">
                {data.name}
              </h1>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
