import Wrapper from "./Wrapper";

function Details({
  feelsLike,
  humidity,
  maxTemp,
  minTemp,
  windSpeed,
  visibility,
}) {
  return (
    <div>
      <Wrapper>
        <div className="p-2 flex w-[250px] h-[200px] text-lg justify-between items-center">
          <ul className="flex flex-col w-full justify-between">
            <li className="flex justify-between transition  hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Felt Temp.</div>
              <div>
                {feelsLike}
                <sup>o</sup> C
              </div>
            </li>
            <li className="flex justify-between transition hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Humidity</div>
              <div>{humidity}%</div>
            </li>
            <li className="flex justify-between transition hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Wind</div>
              <div>{windSpeed} Km/h</div>
            </li>
            <li className="flex justify-between transition hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Visibility</div>
              <div>{visibility / 1000} Km</div>
            </li>
            <li className="flex justify-between transition hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Max Temp.</div>
              <div>
                {maxTemp}
                <sup>o</sup> C
              </div>
            </li>
            <li className="flex justify-between transition hover:bg-darkblue hover:text-white rounded-xl px-2">
              <div>Min Temp.</div>
              <div>
                {minTemp}
                <sup>o</sup> C
              </div>
            </li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}

export default Details;
