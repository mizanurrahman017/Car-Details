import React from "react";

const brands = [
  { id: 1, name: "Toyota", logo: "/toyota logo.jpg" },
  { id: 2, name: "BMW", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  { id: 3, name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { id: 4, name: "Audi", logo: "/audi logo.jpg" },
  { id: 5, name: "Mercedes", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { id: 6, name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg" },
];

const BrowseBrands = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Browse by Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex justify-center items-center p-4 bg-gray-100 rounded-lg hover:shadow-lg cursor-pointer transition duration-300"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseBrands;