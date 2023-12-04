import BreadCumbsTwo from "@/components/custom/BreadCumbsTwo";
import CardBodyPaymentDetail from "@/components/custom/CardBodyPaymentDetail";
import FootOrderDetail from "@/components/custom/FootOrderDetail";
import HeadDetailOrder from "@/components/custom/HeadDetailOrder";
import React from "react";

const DetailsTicketOrder = ({ handlePrevPage }) => {
  const [detailEvent, setDetailEvent] = React.useState([]);

  React.useEffect(() => {
    if (typeof Window !== "undefined") {
      setDetailEvent(JSON.parse(localStorage.getItem("eventId")));
    }
  }, []);

  return (
    <div className="w-full">
      <BreadCumbsTwo handlePrevPage={handlePrevPage} />
      <HeadDetailOrder detailEvent={detailEvent} />
      <CardBodyPaymentDetail detailEvent={detailEvent} />
      <FootOrderDetail />
    </div>
  );
};

export default DetailsTicketOrder;
