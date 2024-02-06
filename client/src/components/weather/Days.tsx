import DayWrapper from "./DayWrapper";

function Days({ data }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-2 ">
      {data.map((eachDay, index) => {
        if (index == 0) {
          return;
        }
        return (
          <div key={index} className="h-[150px] p-1">
            <DayWrapper
              dateTimeStamp={eachDay.date}
              minTemp={eachDay.minTemp}
              maxTemp={eachDay.maxTemp}
              type={eachDay.type}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Days;
