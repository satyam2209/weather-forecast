import React from "react";

function DefaultCity({ setQuery }) {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Sydney" },
    { id: 3, name: "Tokyo" },
    { id: 4, name: "Paris" },
    { id: 5, name: "Toronto" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-around md:my-6 gap-4 sm:gap-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-sm sm:text-lg font-medium hover:bg-gray-700/20 px-2 sm:px-3 py-1 sm:py-2 rounded-md transition ease-in w-full sm:w-auto"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
}

export default DefaultCity;
