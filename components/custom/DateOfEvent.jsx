export default function DateOfEvent({ daysData }) {
  return (
    <>
      <div className="calendar px-5 Mobile-M:px-6 flex justify-center items-center flex-col w-full gap-2">
        <div className="head-calendar flex justify-between items-center w-full">
          <h1 className="font-bold text-sm Mobile-L:text-lg mb-3">
            Choose Package
          </h1>
          <p className="font-medium text-primary text-xs cursor-pointer">
            View Calendar
          </p>
        </div>
        <div className="grid grid-cols-7 text-[0.35rem] Mobile-M:text-[0.38rem] Mobile-L:text-[0.5rem] gap-2">
          {daysData.map((data) => (
            <>
              <div
                key={data.id}
                className={`cal flex justify-center items-center flex-col rounded border ${
                  data.id === 1 ? "border-[#FFCD55]/70" : "border-[#A6A6A6]"
                } text-[#A6A6A6] gap-2 bg-white px-1 Mobile-M:px-2 py-4`}
              >
                <p>{data.dayName}</p>
                <p
                  className={`${
                    data.id === 1 ? "text-[#FFCD55]" : "text-[#A6A6A6]"
                  }`}
                >
                  {data.date}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
