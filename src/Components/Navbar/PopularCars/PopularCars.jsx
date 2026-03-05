import React, { useState } from "react";

const cars = [
  {
    id: 1,
    name: "Toyota Crown",
    brand: "Toyota",
    engine: "1.8L",
    price: "$25,000",
    image: "/toyotacrown.jpg",
    description:
      "The Toyota Corolla is a compact sedan known for reliability, fuel efficiency, and comfort.",
  },
  {
    id: 2,
    name: "BMW M5",
    brand: "BMW",
    engine: "4.4L Twin Turbo",
    price: "$105,000",
    image: "/bmwm5.webp",
    description:
      "The BMW M5 is a high-performance luxury sedan offering speed, style, and advanced tech features.",
  },
  {
    id: 3,
    name: "Tesla Model S",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "/teslamodel.jpg",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  {
    id: 4,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/Audi R8.jpg",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 5,
    name: "Honda insight",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "/Honda insight-.jpg",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  {
    id: 6,
    name: "Jaguar XF",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "/jaguar.jpg",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  {
    id: 7,
    name: "Mazda MX5",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "/Mazda-MX.jpg",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  {
    id: 8,
    name: "Mercedes Benz ",
    brand: "Mercedes Benz",
    engine: "Electric",
    price: "$90,000",
    image: "/mercedes.avif",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  
  

  
  
];

const PopularCarsWithModal = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Popular Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedCar(car)}
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

      {/* Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-lg w-full relative">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-64 object-cover rounded-t-lg"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">{selectedCar.name}</h3>
              <p className="text-gray-600">{selectedCar.brand} | {selectedCar.engine}</p>
              <p className="text-red-600 font-bold mt-2">{selectedCar.price}</p>
              <p className="mt-4 text-gray-700">{selectedCar.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularCarsWithModal;