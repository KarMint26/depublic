import BreadCumbsTwo from "@/components/custom/BreadCumbsTwo";
import HeadDetailOrder from "@/components/custom/HeadDetailOrder";
import React from "react";

const DetailsTicketOrder = () => {
  const [detailEvent, setDetailEvent] = React.useState([]);

  React.useEffect(() => {
    if (typeof Window !== "undefined") {
      setDetailEvent(JSON.parse(localStorage.getItem("eventId")));
    }
  }, []);

  return (
    <div className="w-full">
      <BreadCumbsTwo />
      <HeadDetailOrder detailEvent={detailEvent} />
    </div>
  );
};

export default DetailsTicketOrder;
