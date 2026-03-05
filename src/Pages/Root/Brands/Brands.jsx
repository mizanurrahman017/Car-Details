import React from "react";
import { useNavigate } from "react-router";

const Brands = () => {

  const navigate = useNavigate();

  const brands = [
    {
      name: "Toyota",
      logo: "/toyota logo.jpg"
    },
    {
      name: "BMW",
      logo: "/BMW Logo.png"
    },
    {
      name: "Tesla",
      logo: "/tesla logo.png"
    },
    {
      name: "Audi",
      logo: "/audi logo.jpg"
    },
    {
      name: "Mercedes",
      logo: "/Mercedes-Benz-Logo.png"
    },
    {
      name: "Honda",
      logo: "/Honda logo.jpg"
    },
    {
      name: "Hyundai",
      logo: "/Hyundai logo.webp"
    },
    {
      name: "Nissan",
      logo: "/nissan logo.jpg"
    }
  ];

  const handleBrandClick = (brand) => {
    navigate(`/cars?search=${brand}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">
          Browse By Brands
        </h1>

        <p className="text-gray-500 text-center mb-10">
          Explore cars from the world's most popular brands
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">

          {brands.map((brand, index) => (

            <div
              key={index}
              onClick={() => handleBrandClick(brand.name)}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer flex flex-col items-center justify-center hover:scale-105"
            >

              <img
                src={brand.logo}
                alt={brand.name}
                className="h-16 w-16 object-contain mb-4"
              />

              <h3 className="text-lg font-semibold">
                {brand.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Brands;