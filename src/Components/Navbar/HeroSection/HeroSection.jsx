import React, { useState } from "react";
import { useNavigate } from "react-router";

const HeroSection = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() !== "") {
      navigate(`/cars?search=${search}`);
    }
  };

  return (
    <section
      className="w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
      }}
    >
      <div className="bg-black/60 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Every Car <br /> In One Place
          </h1>

          <p className="mt-4 text-gray-300 max-w-xl">
            Explore detailed specifications, features, and performance of
            thousands of cars from different brands around the world.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search car brand or model..."
              className="px-4 py-3 rounded-md w-full md:w-80 text-black placeholder-gray-500"
              style={{ backgroundColor: "white" }} // input background white
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              onClick={handleSearch}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold text-white"
            >
              Search
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;