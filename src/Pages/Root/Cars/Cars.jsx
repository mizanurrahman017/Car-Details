import React, { useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const allCars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    engine: "1.8L",
    price: "$25,000",
    image: "https://images.unsplash.com/photo-1609949382060-b429ed3d2ff8",
    description:
      "The Toyota Corolla is a compact sedan known for reliability, fuel efficiency, and comfort.",
  },
  {
    id: 2,
    name: "BMW M5",
    brand: "BMW",
    engine: "4.4L Twin Turbo",
    price: "$105,000",
    image: "https://images.unsplash.com/photo-1614077867944-278e0cfaa8e3",
    description:
      "The BMW M5 is a high-performance luxury sedan offering speed, style, and advanced tech features.",
  },
  {
    id: 3,
    name: "Tesla Model S",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "https://images.unsplash.com/photo-1613537583177-3790a6d0f74a",
    description:
      "The Tesla Model S is an all-electric car with impressive range, autopilot, and futuristic design.",
  },
  {
    id: 4,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    engine: "2.0L Turbo",
    price: "$45,000",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    description:
      "The Mercedes C-Class is a luxury sedan offering elegance, safety, and modern technology.",
  },
  {
    id: 6,
    name: "Toyota Allion",
    brand: "Toyota",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 7,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 8,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 9,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 10,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 11,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 12,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 13,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 14,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },{
    id: 15,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 16,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 17,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 18,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 20,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 21,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 22,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 23,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 24,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 25,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 26,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 27,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 28,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 29,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 30,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 31,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 32,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 33,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 34,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 35,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 36,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 37,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 38,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 39,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 40,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 41,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 42,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 43,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 44,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },

  {
    id: 45,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 46,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 47,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 48,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 49,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 50,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 51,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 52,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 53,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "https://images.unsplash.com/photo-1612881381540-8b0b5b74c083",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
 
  

];

const CarsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search") || "";

  const [selectedCar, setSelectedCar] = useState(null);

  const filteredCars = searchQuery
    ? allCars.filter(
        (car) =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allCars;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Cars</h1>

        {searchQuery && (
          <p className="text-gray-600 text-center mb-8">
            Search result for:{" "}
            <span className="font-semibold">{searchQuery}</span>
          </p>
        )}

        {filteredCars.length === 0 ? (
          <p className="text-center text-gray-500">No cars found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
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
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCar && (
          <motion.div
            key="modal"
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-y-auto max-h-[90vh] relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.3}
              onDragEnd={(event, info) => {
                if (info.offset.y > 150) setSelectedCar(null);
              }}
            >
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold z-50"
              >
                &times;
              </button>

              <img
                src={selectedCar.image}
                alt={selectedCar.name}
                className="w-full h-96 object-cover rounded-t-lg"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold">{selectedCar.name}</h3>
                <p className="text-gray-600 mt-2 text-lg">
                  {selectedCar.brand} | {selectedCar.engine}
                </p>
                <p className="text-red-600 font-bold mt-4 text-xl">
                  {selectedCar.price}
                </p>
                <p className="mt-6 text-gray-700 text-lg">
                  {selectedCar.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarsPage;