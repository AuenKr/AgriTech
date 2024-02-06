function DayWrapper({ dateTimeStamp, minTemp, maxTemp, type }) {
  const date = new Date(dateTimeStamp * 1000);

  const renderDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="text-center text-xl text-darkblue flex flex-col items-center justify-center shadow-2xl rounded-[20%] transition hover:scale-105 hover:z-10 bg-white hover:bg-slate-100 duration-200">
      <div className="bg-darkblue w-full rounded-3xl rounded-b-none text-white">
        <div>{renderDate}</div>
        <div>{daysOfWeek[date.getDay()]}</div>
      </div>
      <div className="w-full text-2xl m-2">
        <div className="flex justify-around">
          <img
            src="/src/assets/sunrise.svg"
            alt="max Temprataure"
            width="30px"
            className="hover:animate-spin"
          />
          <div>
            {maxTemp}
            <sup>o</sup> C
          </div>
        </div>
        <div className="flex justify-around">
          <img
            src="/src/assets/sunset.svg"
            alt="min Temprataure"
            width="30px"
          />
          <div>
            {minTemp}
            <sup>o</sup> C
          </div>
        </div>
      </div>
      <div className="capitalize mb-1 font-bold">{type}</div>
    </div>
  );
}

export default DayWrapper;
