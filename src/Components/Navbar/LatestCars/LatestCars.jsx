import React from "react";

const latestCars = [
  {
    id: 1,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    engine: "2.0L Turbo",
    price: "$45,000",
    image: "/mercedes-benz-c-class-010.webp",
  },
  {
    id: 2,
    name: "Audi Q7",
    brand: "Audi",
    engine: "3.0L V6",
    price: "$65,000",
    image: "/audi q7.avif",
  },
  {
    id: 3,
    name: "Tesla Model 3",
    brand: "Tesla",
    engine: "Electric",
    price: "$55,000",
    image: "/Tesla Model 3.webp",
  },
  {
    id: 4,
    name: "BMW X5",
    brand: "BMW",
    engine: "3.0L Twin Turbo",
    price: "$75,000",
    image: "/bmw-x5.avif",
  },
];

const LatestCars = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Latest Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {latestCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{car.name}</h3>
                <p className="text-gray-600">{car.brand}</p>
                <p className="text-gray-600">{car.engine}</p>
                <p className="text-red-600 font-bold mt-2">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestCars;