import React, { useState } from "react";
import { allCars } from "../../../Data/carsData";

const Compare = () => {
  const [car1, setCar1] = useState(null);
  const [car2, setCar2] = useState(null);

  const selectedCar1 = allCars.find((car) => car.id === Number(car1));
  const selectedCar2 = allCars.find((car) => car.id === Number(car2));

  const specs = ["Brand", "Engine", "Price", "Description"];

  return (
    <div className="min-h-screen bg-gray-100 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-3">
          Compare Cars
        </h1>
        <p className="text-gray-500 text-center text-sm sm:text-base mb-10">
          Select two cars to compare their specifications
        </p>

        {/* Car Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {[["Select First Car", setCar1], ["Select Second Car", setCar2]].map(
            ([label, setter], index) => (
              <select
                key={index}
                onChange={(e) => setter(e.target.value)}
                className="p-3 sm:p-4 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-red-500 w-full transition"
              >
                <option>{label}</option>
                {allCars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name}
                  </option>
                ))}
              </select>
            )
          )}
        </div>

        {/* Comparison Cards */}
        {selectedCar1 && selectedCar2 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Spec Labels */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="font-semibold text-lg mb-4 text-gray-600">Specs</h2>
              <div className="flex flex-col gap-4">
                {specs.map((spec) => (
                  <span key={spec} className="font-medium text-gray-700">{spec}</span>
                ))}
              </div>
            </div>

            {/* Car 1 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform">
              <img
                src={selectedCar1.image}
                alt={selectedCar1.name}
                className="h-44 sm:h-48 w-full object-cover rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{selectedCar1.name}</h3>
              <div className="flex flex-col gap-4 text-gray-600">
                {specs.map((spec) => (
                  <span key={spec} className={spec === "Price" ? "text-red-600 font-bold" : ""}>
                    {selectedCar1[spec.toLowerCase()] || selectedCar1.description}
                  </span>
                ))}
              </div>
            </div>

            {/* Car 2 */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform">
              <img
                src={selectedCar2.image}
                alt={selectedCar2.name}
                className="h-44 sm:h-48 w-full object-cover rounded-lg mb-4 shadow-sm"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{selectedCar2.name}</h3>
              <div className="flex flex-col gap-4 text-gray-600">
                {specs.map((spec) => (
                  <span key={spec} className={spec === "Price" ? "text-red-600 font-bold" : ""}>
                    {selectedCar2[spec.toLowerCase()] || selectedCar2.description}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Compare;