import React, { useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { allCars } from "../../../Data/carsData";




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
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-40 sm:h-44 md:h-48 lg:h-52 object-cover hover:scale-110 transition duration-300"
                  />
                </div>
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
                className="w-full max-h-[70vh] object-contain rounded-t-lg"
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