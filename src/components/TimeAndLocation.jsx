import React from "react";

const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center my-6">
        <p className="md:text-lg sm:text-xl text-[16px] sm:font-extralight font-normal">{formattedLocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="text-lg sm:text-xl font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
