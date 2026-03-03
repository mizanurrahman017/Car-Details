import React, { useState } from "react";
import { useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const allCars = [
  {
    id: 1,
    name: "Toyota Crown Crossover (2024-2025) ",
    brand: "Toyota",
    engine: "2.5L",
    price: "$25,000",
    image: "/toyota_crown_sedan_.avif",
    description:
      "The 2024 Toyota Crown is a premium 'Crossover Sedan' that redefines luxury with an elevated stance and futuristic design. It offers two distinct hybrid powertrains: the fuel-efficient 2.5L Hybrid (approx. 17-19 km/L mileage) and the performance-oriented 2.4L Hybrid MAX (approx. 11-13 km/L mileage). **Pros:** Excellent ground clearance for Bangladeshi roads, standard All-Wheel Drive (AWD), and a whisper-quiet cabin with high-end safety features like Toyota Safety Sense 3.0. **Cons:** Sloping roofline reduces rear headroom for tall passengers and trunk space is limited compared to full SUVs. **Maintenance:** Being a Toyota, parts are relatively accessible through specialized importers, though hybrid battery care is essential every 10 years. This car is an ideal blend of sedan comfort and SUV command, perfect for executive city driving and long-distance highway cruises.",
  },
  {
    id: 2,
    name: "BMW M5",
    brand: "BMW",
    engine: "4.4L Twin Turbo",
    price: "$105,000",
    image: "/bmwm5.webp",
    description:
      "The BMW M5 Competition (F90) is a supercar disguised as an executive sedan, powered by a 4.4L V8 engine delivering 625 hp and 750 Nm of torque. It features the revolutionary M xDrive system, which allows the driver to toggle between 4WD for precision and a pure 2WD 'Drift Mode' that sends 100% of the power to the rear wheels for ultimate track fun. **Interior & Luxury:** The cabin is equipped with M-Multifunction seats in Merino leather, a 12.3-inch infotainment system, and a 16-speaker Harman Kardon sound system. **M Performance Parts:** This model often includes carbon fiber roofs, mirror caps, and a rear spoiler to reduce weight and improve aerodynamics. **Pros:** World-class 0-100 km/h acceleration in 3.3 seconds, highly customizable driving profiles (M1/M2 buttons), and dual-personality (luxury cruiser vs. track monster). **Cons:** Extremely high fuel consumption (5-7 km/L in city), very stiff ride quality on Bangladeshi speed breakers, and high maintenance costs for its complex twin-turbo and cooling systems. **Key Hardware:** It relies on a high-output 105Ah AGM battery and high-performance M Compound brakes, with optional Carbon Ceramic brakes for fade-free stopping. It remains the gold standard for those seeking prestige and adrenaline in one package.",
  },
  {
    id: 3,
    name: "Tesla Model S",
    brand: "Tesla",
    engine: "Electric",
    price: "$90,000",
    image: "/teslamodel.jpg",
    description:
      "The 2026 Tesla Model S is a technological marvel, featuring advanced AI-driven software and world-class acceleration. **Full Self-Driving (Supervised):** This software allows the car to navigate city streets, stop at traffic lights, and handle intersections under active driver supervision. It uses 8 high-resolution cameras and the new 'AI Computer' (formerly FSD Computer) to provide a 360-degree vision of its surroundings. **Ludicrous to Plaid Mode:** While 'Ludicrous Mode' made Tesla famous, the new 'Plaid Mode' (in Tri-Motor models) is its successor, delivering 1,020 hp and a 0-100 km/h sprint in just 2.1 seconds. **Mileage & Range:** It offers an industry-leading range of up to 405 miles (approx. 650 km) per charge. **Pros:** Unmatched acceleration, futuristic 17-inch cinematic screen, and over-the-air software updates that improve the car over time. **Cons:** High import tax in Bangladesh, minimalist interior lack of physical buttons, and steering yoke learning curve. **Hardware:** Equipped with a 100 kWh battery pack and a 22-speaker, 960-watt premium audio system. It remains the ultimate choice for a high-tech, high-speed electric lifestyle.",
  },
  {
    id: 4,
    name: "Audi R8",
    brand: "Audi",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/Audi R8.jpg",
    description:
      "The Audi R8 is a mid-engine supercar that shares its DNA with the Lamborghini Huracán, offering a legendary naturally aspirated V10 experience. Known as the 'everyday supercar,' it combines blistering performance—reaching 100 km/h in just 3.1 seconds—with a surprisingly comfortable and tech-focused interior featuring the Audi Virtual Cockpit. **Performance:** Its 5.2L V10 engine produces up to 620 hp and a top speed of 331 km/h. **Fuel & Maintenance:** Fuel consumption is high, averaging around 13 L/100 km (approx. 5-7 km/L in city), and it requires specialized maintenance, including frequent oil changes and care for its optional carbon-ceramic brakes. **Pros:** Iconic V10 engine sound, incredible handling via Quattro AWD, and a driver-focused 'monoposto' cockpit. **Cons:** Very limited cargo space, high running costs, and it has officially ended production in 2024, making it a rare collector's item.",
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    engine: "2.0L Turbo",
    price: "$45,000",
    image: "/mercedes-benz-c-class-010.webp",
    description: `The Mercedes C-Class is a premium luxury sedan that perfectly combines elegant design, advanced technology, and powerful performance. Equipped with a 2.0L turbocharged 4-cylinder petrol engine, this model delivers smooth acceleration and impressive power while maintaining excellent fuel efficiency. The engine is paired with a refined 9-speed automatic transmission that ensures seamless gear shifts and a comfortable driving experience in both city traffic and highway cruising.

  The exterior design features the iconic Mercedes-Benz front grille, sleek LED headlights, sporty alloy wheels, and a modern aerodynamic body. Inside, the cabin offers a luxurious atmosphere with high-quality leather seats, ambient lighting, a fully digital instrument cluster, and a large infotainment display with Apple CarPlay and Android Auto support.

  Safety is a top priority in the C-Class, including advanced features such as Active Brake Assist, Blind Spot Monitoring, Lane Keeping Assist, Adaptive Cruise Control, parking sensors, and multiple airbags.

  With its perfect balance of luxury, comfort, safety, and cutting-edge German engineering, the Mercedes C-Class stands as an excellent choice for drivers who seek sophistication, performance, and everyday practicality in a premium sedan.`
  },

  {
    id: 6,
    name: "Toyota Allion",
    brand: "Toyota",
    engine: "1.5L / 1.8L 4-Cylinder Petrol",
    price: "$12,000 - $18,000",
    image: "/Toyota allion.jpg",
    description: `The Toyota Allion is a stylish and reliable Japanese sedan designed for comfort, fuel efficiency, and everyday practicality. Powered by a 1.5L or 1.8L 4-cylinder petrol engine, the Allion delivers smooth performance with excellent fuel economy, making it ideal for both city driving and long highway journeys.

  The car features a refined automatic transmission (CVT) that ensures seamless acceleration and a comfortable driving experience. Its exterior design includes a bold front grille, sleek headlights, and an elegant body shape that gives it a premium appearance.

  Inside, the Toyota Allion offers a spacious and comfortable cabin with high-quality fabric seats, air conditioning, power windows, and a modern infotainment system. Safety features include ABS braking system, multiple airbags, stability control, and traction control for secure driving.

  Known for its durability, low maintenance cost, and strong resale value, the Toyota Allion remains a popular choice for families and professionals seeking a dependable and fuel-efficient sedan.`
  },
  {
    id: 7,
    name: "Toyota Corolla Cross ",
    brand: "Toyota",
    engine: "1.8L Hybrid / 2.0L Hybrid MAX",
    price: "$170,000",
    image: "/toyota corolla cross_2026.png",
    description:
      "The 2026 Toyota Corolla Cross is a high-performance subcompact crossover built for durability and fuel economy. **Hybrid Battery & Maintenance:** It features a self-charging lithium-ion battery. In Bangladesh's dusty and humid climate, regular cleaning of the battery cooling fan and intake filter (located under the rear seat) is crucial to prevent overheating and extend battery life to 10-15 years. Avoid parking in direct sunlight for long hours to protect the battery cells. **Durability on BD Roads:** With a robust 8.1-inch ground clearance, it easily navigates high speed breakers and waterlogged streets. Its MacPherson strut front and torsion beam/independent rear suspension provide a balanced, rattle-free ride even on uneven terrain. **Resale Value:** Due to Toyota's vast spare parts availability and reliability, it maintains one of the highest resale values in the local market. **Mileage:** Expect an impressive 17-22 km/L in city traffic. It is the perfect blend of a rugged SUV and a cost-effective daily driver.",
  },
  {
    id: 8,
    name: "Toyota Premio",
    brand: "Toyota",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/Toyota_Premio 2017.jpg",
    description:
      "The 2017 Toyota Premio is the ultimate symbol of elegance and reliability in Bangladesh. **Packages:** It comes in three main trims: the 'F' (Standard), 'F L-Package' (Upgraded interior), and the top-tier 'F EX-Package' which features LED headlamps, premium wood-grain finish, and power-adjustable seats. **Performance:** The 1.5L engine delivers a smooth 109 hp, paired with a CVT transmission for seamless gear shifts. **Fuel Efficiency:** It offers a practical mileage of 12-14 km/L in city traffic and up to 18 km/L on highways. **Pros:** Luxurious soft-touch interior, extremely high resale value, and a suspension system specifically tuned for maximum passenger comfort. **Cons:** Lower ground clearance (160mm) requires caution over large speed breakers, and it lacks the advanced fuel economy of hybrid competitors. **Durability & Parts:** It is highly durable for Bangladeshi conditions; spare parts are easily available in every corner of the country, from Dholaikhal to premium service centers. **Safety:** Includes Toyota Safety Sense C with Lane Departure Alert and Automatic High Beam. It remains the most trusted premium family sedan for long-term use.",
  },
  {
    id: 9,
    name: "Honda Civic",
    brand: "Honda",
    engine: "2.0L",
    price: "$170,000",
    image: "/honda-civic 2025.jpg",
    description:
      "The 2025 Honda Civic Sedan is a benchmark for practical luxury and efficiency. **Engine & Power:** The standard LX and Sport trims feature a 2.0L i-VTEC engine producing 150 hp, while the new Hybrid variant delivers a more powerful 200 hp. **Fuel Economy:** It is highly efficient, offering around 13-15 km/L in city traffic and up to 17-18 km/L on highways. **Pros:** Smooth CVT transmission for a comfortable drive, spacious interior with premium materials, and top-tier safety with 'Honda Sensing' (Auto-braking, Adaptive Cruise Control). **Cons:** Low ground clearance (approx. 5.9 inches) can be challenging for high speed breakers in Bangladesh, and it lacks some luxury features like a 360-degree camera. **Maintenance:** Uses a standard 12V lead-acid battery (Group 51R) which lasts 3-5 years; regular CVT fluid changes every 30,000 km are essential for longevity. This car is the ideal choice for those seeking a stylish, reliable, and tech-savvy daily driver.",
  },
  {
    id: 10,
    name: "Honda Accord",
    brand: "Honda",
    engine: "2.0L 4-Cylinder Hybrid System",
    price: "$170,000",
    image: "/honda accord.avif",
    description:
      "The 2025 Honda Accord Touring is the ultimate expression of executive luxury and smart engineering. **Premium Comfort:** This top-tier variant features perforated leather-trimmed seats that are both 'Heated' for cold mornings and 'Ventilated' with active cooling to keep you sweat-free in Bangladesh's intense summer heat. **Performance:** Its 2.0L Hybrid powertrain delivers a smooth 204 hp with a high-torque electric motor, ensuring rapid acceleration and a whisper-quiet cabin. **Fuel Efficiency:** It is incredibly economical, providing up to 20-22 km/L mileage. **Tech & Interior:** It boasts a massive 12.3-inch touchscreen with 'Google Built-in', a 6-inch Head-Up Display (HUD) that projects speed on the windshield, and a 12-speaker Bose Premium audio system. **Pros:** Exceptional rear legroom, world-class safety with Honda Sensing 360, and high resale value. **Cons:** Very low 5.3-inch ground clearance which requires care over Bangladeshi speed breakers. **Maintenance:** Requires periodic hybrid battery air filter cleaning and high-quality synthetic oil; parts are widely available through authorized dealers. It is the perfect blend of a luxury limo and a fuel-efficient daily driver.",
  },
  {
    id: 11,
    name: "toyota mark II",
    brand: "toyota",
    engine: "2.5L 1JZ-GTE VVTi",
    price: "$170,000",
    image: "/Toyota_Mark_II.jpg",
    description:
      "The Toyota Mark II JZX100 is a masterpiece of Japanese engineering, famous for housing the legendary 1JZ-GTE engine. **1JZ vs 2JZ Engine:** While the 1JZ-GTE (2.5L Turbo) is known for its high-revving nature and iconic 'shriek' sound, many enthusiasts swap it for the 2JZ-GTE (3.0L Turbo) from the Supra for more torque and 1000+ HP potential. **Drift Mode:** Being a Rear-Wheel Drive (RWD) sedan with a limited-slip differential (LSD), it is a favorite for drifting, offering incredible control during slides. **Fuel & Mileage:** It is a 'thirsty' car, especially with turbo modifications, yielding around 5-7 km/L in city traffic and 10 km/L on highways. **Pros:** Bulletproof iron-block engine, immense tuning support, and a luxury cabin with velvet seats and wood trim. **Cons:** High fuel costs, expensive turbo maintenance, and parts are becoming 'collector items' in Bangladesh. **Maintenance:** Requires high-octane fuel and frequent oil changes (every 3,000 km) to protect the turbocharger; the 1JZ VVTi system needs specialized care to avoid oil leaks. It is not just a car, but a piece of JDM history for true enthusiasts.",
  },
  {
    id: 12,
    name: "toyota chr",
    brand: "toyota",
    engine: "1.2L Turbo",
    price: "$170,000",
    image: "/toyota chr.jpg",
    description:
      "The Toyota C-HR is a premium subcompact crossover that defines modern urban styling. **Engine Variants:** It offers three distinct powertrains: a fuel-efficient 1.2L Turbocharged engine for zippy city driving, a highly popular 1.8L Hybrid system focused on maximum economy, and a more powerful 2.0L Hybrid variant for those seeking extra performance. **Mileage:** The 1.8L hybrid is a standout, delivering an impressive 20-25 km/L in city conditions. **Pros:** Avant-garde diamond-cut design, standard Toyota Safety Sense (including adaptive cruise control), and exceptional resale value in Bangladesh. **Cons:** Limited rear visibility due to small C-pillar windows and a 5.9-inch ground clearance that requires care on high speed breakers. **Maintenance:** Features a self-charging battery system; regular cleaning of the hybrid cooling fan is essential for long-term durability. It is the perfect blend of a stylish coupe and a versatile SUV.",
  },

  {
    id: 13,
    name: "toyota prius",
    brand: "toyota",
    engine: "1.8L 4-Cylinder Hybrid",
    price: "$170,000",
    image: "/-toyota-prius 2022.jpg",
    description:
      "The 2022 Toyota Prius remains the gold standard for eco-conscious commuting, offering both standard Hybrid and 'Prime' Plug-in Hybrid (PHEV) variants. **Prius Prime Advantage:** The Prime model features a larger 8.8 kWh battery, allowing for an all-electric driving range of up to 25 miles (40 km), which is perfect for zero-emission city trips. **Battery Health & Maintenance:** To ensure the hybrid battery lasts 10-15 years, it is critical to perform regular health checks using an OBDII scanner to monitor cell voltage and internal resistance. In Bangladesh's hot climate, keeping the battery cooling fan intake (located near the rear seats) free of dust is essential to prevent thermal degradation. **Performance:** The 1.8L Atkinson-cycle engine delivers a combined 121 hp, achieving a legendary mileage of 22-25 km/L. **Pros:** Industry-leading reliability, smooth transition between gas and electric power, and high resale value. **Cons:** Limited rear-seat headroom due to the aerodynamic 'fastback' roofline and a relatively slow 0-100 km/h time. It is the ultimate pragmatic choice for fuel savings and long-term durability.",
  },
  {
    id: 14,
    name: "TOYOTA LAND CRUISER LC200 ",
    brand: "TOYOTA",
    engine: "4.5L V8 Turbo Diesel",
    price: "$170,000",
    image: "/toyota lc 200.jpeg",
    description:
      "The Toyota Land Cruiser LC200 is the undisputed 'King of the Road,' world-renowned for its bulletproof reliability and off-road supremacy. **Performance:** It is powered by a massive 4.5L V8 Twin-Turbo Diesel engine delivering 268 hp and a staggering 650 Nm of torque, or a 4.6L V8 Petrol variant. **Off-Road Mastery:** Equipped with a full-time 4WD system, Kinetic Dynamic Suspension System (KDSS), and 'Crawl Control' to navigate the toughest terrains with ease. **Pros:** Unmatched durability, high 8.9-inch ground clearance for flood-prone roads, and a luxury 7-seater interior with immense road presence. **Cons:** Very high fuel consumption (approx. 4-6 km/L in city) and extremely high maintenance/registration costs in Bangladesh. **Durability:** Built with a body-on-frame chassis, it is designed to last over 25 years in even the harshest environments. It is the ultimate status symbol for those seeking power, safety, and a vehicle that never quits.",
  },
  {
    id: 15,
    name: "honda vezel",
    brand: "honda",
    engine: "1.5L i-VTEC",
    price: "$170,000",
    image: "/Honda-Vezel-2025.webp",
    description:
      "The 2025 Honda Vezel is a cutting-edge compact crossover designed for efficiency and versatility. **Trim Levels:** It comes in three main packages: the 'G' (Base petrol), the 'Z' (Premium hybrid with power tailgate and 18-inch alloys), and the 'PLaY' (Stylish hybrid with panoramic glass roof and tri-color interior). **e:HEV System:** Its dual-motor hybrid setup allows the car to run primarily on electric power in the city, switching to engine power only during high-speed cruising for maximum fuel savings of 20-22 km/L. **Pros:** Industry-leading 'Magic Seats' for tall cargo, sleek coupe-SUV profile, and Honda Sensing safety suite (Collision Mitigation, Road Departure Mitigation). **Cons:** Rear visibility is slightly obstructed by the thick C-pillar, and the 7.1-inch ground clearance requires caution on uneven BD roads. **Maintenance:** Crucial for Bangladesh's dusty climate is cleaning the hybrid battery air filter located under the rear seat every 5,000 km to prevent overheating. It is the perfect balance of technology, luxury, and eco-friendly driving.",
  },

  {
    id: 16,
    name: "Toyota Alphard X",
    brand: "Toyota",
    engine: "2.5L Hybrid",
    price: "$170,000",
    image: "/Toyota_Alphard_X.jpg",
    description:
      "The Toyota Alphard Executive Lounge is the pinnacle of ultra-luxury MPVs, often described as a private jet on wheels. **Executive Lounge Features:** This top-tier variant includes premium semi-aniline leather 'Ottoman' seats with power-adjustable leg rests, heating, and ventilation, providing unmatched comfort for VIP passengers. **Hybrid Technology:** The 2.5L Hybrid system uses Toyota's E-Four (electric 4WD) technology, ensuring a silent, vibration-free ride while delivering an impressive mileage of 15-18 km/L, which is exceptional for a vehicle of this size. **Pros:** World-class cabin insulation, JBL 17-speaker premium audio system, and a 13.1-inch rear seat entertainment screen. **Cons:** The high cost of specialized hybrid components and its large dimensions make it challenging for tight Bangladesh parking spots. **Safety:** Comes standard with Toyota Safety Sense 2.0, featuring 360-degree cameras and blind-spot monitoring. It is the ultimate choice for luxury, privacy, and long-distance travel comfort.",
  },
  {
    id: 17,
    name: "supra mk4",
    brand: "Toyota",
    engine: "3.0L 2JZ-GE I6",
    price: "$170,000",
    image: "/toyota supra mk4.webp",
    description:
      "The Toyota Supra MK4 is a legendary icon of the JDM world, famed for its over-engineered performance and pop-culture status. **Engine & Power:** It features the bulletproof 3.0L 2JZ-GTE twin-turbo inline-six engine, producing 276-320 hp in stock form, but capable of handling over 1,000 hp with tuning. **Speed:** It can accelerate from 0-100 km/h in just 4.6 seconds, a feat that made it a supercar killer in the 1990s. **Pros:** Incredible tuning potential, timeless aerodynamic '90s design with the iconic rear wing, and a driver-focused 'cockpit' interior. **Cons:** Extremely high market price due to collector demand, high fuel consumption, and expensive maintenance for original parts. **Maintenance:** Requires high-octane fuel and specialized synthetic oils; the twin-turbo system needs meticulous care to avoid boost leaks. It is the ultimate dream car for enthusiasts who value raw power and automotive heritage.",
  },
  {
    id: 18,
    name: "toyota axio",
    brand: "toyota",
    engine: "1.5L 1NZ-FXE (Hybrid)",
    price: "$170,000",
    image: "/Toyota-Axio.jpg",
    description:
      "The Toyota Corolla Axio is the quintessential family sedan in Bangladesh, celebrated for its legendary reliability and extreme fuel efficiency. **Performance & Variants:** It offers two main powertrains: a dependable 1.5L petrol engine and a highly efficient 1.5L Hybrid system that pairs an Atkinson-cycle engine with an electric motor. **Efficiency:** The hybrid variant is a fuel-economy leader, often delivering 22–28 km/L in city traffic, making it perfect for the congested roads of Dhaka. **Pros:** Exceptional resale value, affordable and widely available spare parts, and a smooth CVT transmission for a comfortable commute. **Cons:** The 'X' and 'EX' packages have a relatively basic interior with limited legroom for tall rear passengers, and the 6.1-inch (155mm) ground clearance requires caution over high speed breakers. **Maintenance:** Known for low running costs, but the hybrid battery cooling filter must be cleaned every 5,000 km to ensure long-term battery health in tropical climates. It remains the smartest investment for daily office commuting and family use in Bangladesh.",
  },
  {
    id: 20,
    name: "Mercedes-AMG G63",
    brand: "Mercedes-Benz",
    engine: "4.0L V8 Biturbo",
    price: "$170,000",
    image: "/Mercedes G63.jpg",
    description:
      "The Mercedes-AMG G63 is the ultimate fusion of brute force and high-end opulence. **Executive Interior:** The cabin features an exclusive 'IWC Schaffhausen' analog clock on the center console, symbolizing its premium craftsmanship, and 'Active Multicontour' front seats with heating, ventilation, and 8-program massage functions for maximum comfort during long drives. **Performance & Sound:** Its 577 hp V8 Biturbo engine is complemented by a 15-speaker Burmester Surround Sound system, delivering an immersive acoustic experience alongside the iconic exhaust roar. **Night Package:** Includes obsidian black accents on the exterior for a stealthy, aggressive look. **Pros:** Unmatched status symbol, world-class luxury materials (Nappa leather and carbon fiber), and 9.5-inch ground clearance for any road condition. **Cons:** Extremely high maintenance and fuel costs, with limited maneuverability in tight city spaces. **Safety:** Equipped with Pre-Safe systems and a 360-degree camera for effortless parking. It is a legendary SUV that offers a first-class sanctuary inside a battle-ready exterior.",
  },
  {
    id: 21,
    name: "Toyota Crown Crossover RS",
    brand: "Toyota",
    engine: "2.5L Hybrid",
    price: "$170,000",
    image: "/toyotacrown.jpg",
    description:
      "The 2025 Toyota Crown is a masterclass in modern luxury, blending the elegance of a sedan with the versatile height of a crossover. **RS Performance:** The top-tier 'RS' grade features the powerful 2.4L Turbo Hybrid MAX powertrain, delivering 340 hp and a thrilling 0-100 km/h in just 5.7 seconds. **Visual Style:** It is famous for its bold 'Bi-tone' color schemes, where the hood, roof, and trunk are finished in black to contrast with vibrant body colors like Bronze or Precious White. **Luxury Interior:** The cabin is a sanctuary with 12.3-inch dual screens, a panoramic glass roof, and 'Warm Steel' accents that highlight its premium craftsmanship. **Pros:** Commanding road view, standard Electronic On-Demand AWD, and a whisper-quiet ride even at high speeds. **Cons:** The unique 'lifted' sedan look may be polarizing, and the trunk space is slightly less than a traditional SUV. **Maintenance:** Uses a high-output bipolar nickel-metal hydride battery; regular software updates and hybrid system health checks are recommended for optimal performance. It is the ultimate choice for executives who want to stand out with power and prestige.",
  },
  {
    id: 22,
    name: "honda vezel Hybrid",
    brand: "honda",
    engine: "1.5L i-VTEC + i-DCD Hybrid",
    price: "$170,000",
    image: "/honda vezel.jpg",
    description:
      "The Honda Vezel is a versatile and stylish compact crossover that has dominated the Bangladeshi market for years. **Performance:** It features a 1.5L i-VTEC engine paired with an advanced i-DCD (Intelligent Dual-Clutch Drive) hybrid system, delivering a spirited 130 hp. **Fuel Efficiency:** Renowned for its economy, it provides an impressive mileage of 18-22 km/L in city driving. **Pros:** Iconic 'Magic Seats' for flexible interior storage, high-quality cabin finish, and excellent ground clearance (approx. 7.3 inches) suitable for local roads. **Cons:** The dual-clutch transmission (DCT) requires careful maintenance and high-quality transmission fluid to avoid jerky shifts. **Safety:** Includes Honda Sensing technology in higher trims, offering lane-keep assist and collision mitigation braking. It remains the top choice for urban families seeking a premium look with practical SUV capabilities."
  },
  {
    id: 23,
    name: "range rover",
    brand: "Audi",
    engine: "4.4L V8 Twin-Turbo",
    price: "$170,000",
    image: "/range rover.avif",
    description:
      "The Range Rover PHEV is a masterpiece of sustainable luxury, offering a silent and emission-free driving experience without compromising on power. **Electric Range & Battery:** It is equipped with a large 38.2 kWh lithium-ion battery that provides an impressive all-electric driving range of up to 70 miles (113 km), perfect for silent city commuting in Dhaka. **Charging:** The vehicle supports 50kW DC rapid charging, which can charge the battery from 0% to 80% in under an hour, while a standard home wallbox takes about 5 hours for a full charge. **Performance:** The P510e variant combines a 3.0L six-cylinder engine with a 105kW electric motor to produce a total of 510 hp, achieving 0-100 km/h in just 5.5 seconds. **Pros:** Exceptionally quiet EV mode, significant fuel savings in traffic, and tax benefits in many regions. **Cons:** The larger battery adds weight, slightly affecting high-speed cornering agility, and charging infrastructure in Bangladesh is still developing. **Maintenance:** Requires periodic battery health monitoring and specialized care for the hybrid cooling system to ensure long-term efficiency. It is the ultimate eco-luxury SUV for the modern executive.",
  },

  {
    id: 24,
    name: "Toyota Corolla Fielder",
    brand: "toyota",
    engine: "1.5L 1NZ-FXE (Hybrid)",
    price: "$170,000",
    image: "/toyota fielder.webp",
    description:
      "The Toyota Corolla Fielder is the ultimate practical station wagon, beloved in Bangladesh for its immense cargo space and reliability. **Performance:** It shares the same robust powertrain as the Axio, offering a fuel-efficient 1.5L Hybrid system that excels in stop-and-go city traffic. **Utility:** Its defining feature is the extended rear cargo area, which can be further expanded by folding the rear seats, making it perfect for family trips or carrying large goods. **Pros:** Extraordinary fuel economy (up to 25+ km/L in hybrid), low maintenance costs, and widely available spare parts across Bangladesh. **Cons:** The 'X' grade has a basic interior, and the 6.1-inch ground clearance can be challenging on rural or broken roads. **Safety:** Higher trims like the 'G' or 'W×B' come with Toyota Safety Sense, featuring pre-collision alerts and lane departure warnings. It is the smartest choice for families who need a durable, high-utility vehicle with a high resale value.",
  },
  {
    id: 25,
    name: "Toyota Aqua",
    brand: "Audi",
    engine: "1.5L 1NZ-FXE Hybrid I4",
    price: "$170,000",
    image: "/Toyota Aqua.png",
    description:
      "The Toyota Aqua is a champion of urban mobility, widely recognized as one of the most fuel-efficient hybrid hatchbacks in the world. **Hybrid Efficiency:** Powered by a 1.5L Atkinson-cycle engine paired with Toyota's Hybrid Synergy Drive, it delivers an extraordinary mileage of 25-30 km/L, making it a favorite for daily commuting in Dhaka. **Compact Design:** Its small footprint allows for effortless maneuvering and parking in tight city spaces, yet it offers a surprisingly modern and ergonomic interior. **Pros:** Exceptional fuel economy, low carbon emissions, and high resale value in the local market. **Cons:** Limited rear legroom for tall passengers and modest trunk space compared to larger sedans. **Maintenance:** Requires regular cleaning of the hybrid battery air intake filter (located under the rear seat) and periodic checks of the inverter coolant. It is the ideal car for eco-conscious drivers and small families seeking maximum savings on fuel.",
  },
  {
    id: 26,
    name: "toyota esquire",
    brand: "Toyota",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/toyota esquire.jpg",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 27,
    name: "Nissan X-Trail",
    brand: "Nissan",
    engine: "1.5L VC-Turbo",
    price: "$170,000",
    image: "/Nissan X-Trail.jpg",
    description:
      "The Nissan X-Trail is a technologically advanced family SUV that redefines the hybrid experience with its unique e-POWER system. **Innovation:** Unlike traditional hybrids, the wheels are driven 100% by electric motors, while the 1.5L VC-Turbo engine acts solely as a generator to charge the battery, providing an EV-like smooth and quiet ride. **Control:** It features 'e-4ORCE' all-wheel-drive technology, which manages power output and braking for each wheel individually, ensuring superior stability on slippery or uneven roads. **Pros:** Premium 7-seater cabin option, impressive fuel efficiency (approx. 18-20 km/L), and advanced safety features like ProPILOT Assist. **Cons:** The complex e-POWER system requires specialized servicing, and the third-row seating is best suited for children. **Maintenance:** Regular maintenance of the electrical cooling system and high-quality synthetic oil for the generator engine are essential. It is a perfect blend of electric performance and SUV versatility for modern Bangladeshi families.",
  },
  {
    id: 28,
    name: "Honda Grace Hybrid",
    brand: "Honda",
    engine: "1.5L i-VTEC",
    price: "$170,000",
    image: "/Honda Grace.jpg",
    description:
      "The Honda Grace is a premium compact sedan renowned for its exceptional fuel efficiency and smooth ride quality. **Performance:** It features a 1.5L i-VTEC engine paired with Honda's Intelligent Dual-Clutch Drive (i-DCD) hybrid system, delivering a combined 135 hp and a seamless driving experience. **Fuel Economy:** It is a segment leader in efficiency, often providing 22-26 km/L, making it a highly cost-effective choice for daily commuting. **Pros:** Spacious rear legroom (often compared to larger D-segment sedans), premium interior finishes, and rear AC vents for passenger comfort. **Cons:** The dual-clutch transmission (DCT) requires specific high-quality fluid and periodic maintenance to ensure longevity in hot, congested climates. **Safety:** Equipped with Honda Sensing technology in higher trims like the 'EX', including Adaptive Cruise Control and Lane Keeping Assist. It is the perfect balance of luxury and practicality for Bangladeshi families.",
  },
  {
    id: 29,
    name: "Suzuki Alto",
    brand: "Suzuki",
    engine: "1.0L K10B I3",
    price: "$170,000",
    image: "/Suzuki Alto 2009.webp",
    description:
      "The Suzuki Alto is the ultimate urban survivor, specifically designed for maximum utility with minimum fuel consumption. **JDM Efficiency:** The Japanese Domestic Market (JDM) version features a 660cc engine and Suzuki's 'ENE-CHARGE' technology, which uses an electric motor to assist the engine, achieving an incredible 25-30 km/L. **City Driving:** Its ultra-compact dimensions and a turning radius of just 4.2 meters make it the easiest car to navigate through Dhaka's tightest alleys. **Interior & Tech:** Despite its size, the JDM models often include modern touches like heated seats, start-stop technology, and eco-drive indicators to help drivers save more fuel. **Pros:** Lowest maintenance cost in the country, exceptional resale value, and tax benefits for smaller engine capacity. **Cons:** Very thin body panels and limited safety features make it less suitable for high-speed highway travel. **Maintenance:** Parts are interchangeable with many other Suzuki models, and the simple mechanical layout allows for quick and cheap repairs. It is the most sensible investment for anyone looking for a reliable, low-cost daily driver.",
  },
  {
    id: 30,
    name: "Hyundai Elantra",
    brand: "Hyundai",
    engine: "1.6L Turbocharged GDI I4",
    price: "$170,000",
    image: "/Hyundai Elantra 2024.avif",
    description:
      "The 2024 Hyundai Elantra N-Line is a sportier, high-performance evolution of the standard sedan, designed for driving enthusiasts. **N-Line Performance:** It is powered by a 1.6L Turbo engine delivering 201 hp and 265 Nm of torque, paired with a 7-speed Dual-Clutch Transmission (DCT) for lightning-fast gear shifts. **Aggressive Styling:** The N-Line trim stands out with its unique honeycomb grille, dual chrome exhaust tips, 18-inch alloy wheels, and blacked-out exterior accents. **Driver-Centric Cabin:** Inside, you get N-Line branded sport seats with red stitching, a leather-wrapped perforated steering wheel, and alloy pedals that enhance the racing feel. **Pros:** Sharp handling with sport-tuned suspension, advanced tech like the 10.25-inch navigation system, and a bold aesthetic that turns heads. **Cons:** The stiffer suspension provides more road feedback, which might feel less comfortable on very bumpy roads. **Maintenance:** Turbocharged engines require high-quality synthetic oil and periodic checks of the DCT system to ensure peak performance. It is the perfect blend of daily practicality and exhilarating speed.",
  },
  {
    id: 31,
    name: "Toyota Belta",
    brand: "Toyota",
    engine: "1.0L 1KR-FE",
    price: "$170,000",
    image: "/Toyota Belta.avif",
    description:
      "The Toyota Belta is a practical and fuel-efficient subcompact sedan, popular for its reliability and low running costs. **Evolution:** While the classic Belta (2005-2012) was a Japanese favorite, the new generation (shown in image) is a collaboration based on the Suzuki Ciaz platform for specific markets. **Performance:** It typically features a 1.5L four-cylinder engine that balances smooth city driving with impressive fuel economy of around 16-19 km/L. **Pros:** Spacious cabin with ample rear legroom, large trunk capacity for family luggage, and very easy maintenance. **Cons:** The build quality is lighter compared to premium sedans, and it lacks high-end luxury features found in the Corolla series. **Safety:** Includes standard dual airbags, ABS with EBD, and a rigid body structure for urban safety. It remains a smart investment for small families and first-time car owners looking for a hassle-free sedan experience.",
  },
  {
    id: 32,
    name: "Suzuki Swift",
    brand: "Suzuki",
    engine: "1.2L Z12E 3-Cylinder Mild Hybrid",
    price: "$170,000",
    image: "/Suzuki Swift 2024.jpg",
    description:
      "The 2024 Suzuki Swift is a reimagined icon, blending its legendary 'fun-to-drive' DNA with modern efficiency. **Performance & Transmission:** It features a newly developed CVT (Continuously Variable Transmission) that is lighter and more efficient, providing a smoother acceleration feel in city traffic. **Sport Mode:** For those seeking more engagement, the 'Sport' mode sharpens throttle response and adjusts the CVT's behavior to hold higher RPMs, making overtaking on highways much easier. **Mild Hybrid Power:** The 12V ISG (Integrated Starter Generator) assists during acceleration, reducing engine load and optimizing fuel economy up to 24 km/L. **Pros:** Exceptional agility with a tight turning radius, improved cabin quietness, and advanced safety tech like DSBS II. **Cons:** The CVT might feel less 'punchy' than a traditional automatic for hardcore enthusiasts, and boot space remains compact. **Maintenance:** Requires specific CVT fluid changes at recommended intervals and battery health checks for the hybrid system. It is the ultimate choice for urban commuters who value style, agility, and world-class efficiency.",
  },
  {
    id: 33,
    name: "Nissan Sunny",
    brand: "Nissan",
    engine: "1.3L QG13DE",
    price: "$170,000",
    image: "/Nissan-Sunny-B15.jpg",
    description:
      "The Nissan Sunny B15 is a legendary compact sedan celebrated for its exceptional durability and straightforward engineering. **Engine Performance:** Primarily powered by the reliable QG series engines, it is known for providing a steady and smooth drive, making it a workhorse for Bangladeshi families for decades. **Reliability:** Often referred to as a 'bulletproof' car, the B15 is famous for its mechanical simplicity, which allows it to withstand harsh road conditions and poor fuel quality. **Pros:** Low maintenance costs, comfortable seating for five, and a very soft suspension that absorbs bumps effectively. **Cons:** Lacks modern safety tech like multiple airbags or stability control, and the design is considered dated by today's standards. **Maintenance:** Spare parts are incredibly easy to find in local markets, and its simple engine layout makes it easy for any local mechanic to service. It remains a top choice in the used car market for those seeking a reliable, low-budget sedan that just keeps on going.",
  },

  {
    id: 34,
    name: "Honda City",
    brand: "Honda",
    engine: "1.5L e:HEV Hybrid",
    price: "$170,000",
    image: "/Honda City 2024.jpg",
    description:
      "The 2024 Honda City is a versatile masterpiece available in both elegant Sedan and sporty Hatchback body styles. **Body Styles:** The Sedan offers a massive 519-liter trunk for family luggage, while the Hatchback features 'ULTRA Seats' (Utility, Long, Tall, Refresh modes), allowing the interior to be reconfigured for carrying tall items like plants or surfboards. **Hybrid Innovation:** The e:HEV variant utilizes a dual-motor hybrid system where the electric motor provides instant torque (253 Nm), achieving an incredible fuel efficiency of up to 26-28 km/L. **Tech & Safety:** Both versions come standard with Honda SENSING ADAS, including Lane Departure Warning and Adaptive Cruise Control. **Pros:** Superior rear legroom, refined ride quality, and a high-tech cabin with wireless connectivity. **Cons:** Lower ground clearance makes it sensitive to high speed-breakers, and the hybrid version has a higher upfront cost. **Maintenance:** Requires specific 0W-20 synthetic oil and regular hybrid cooling system inspections to maintain peak efficiency. It is the gold standard for city dwellers seeking a premium and adaptable driving experience.",
  },
  {
    id: 35,
    name: "Mitsubishi Lancer Evolution",
    brand: "Mitsubishi",
    engine: "2.0L 4G63T Turbocharged I4",
    price: "$170,000",
    image: "/Mitsubishi Lancer.jpg",
    description:
      "The Mitsubishi Lancer Evolution V is a legendary high-performance sedan that defined the golden era of World Rally Championship (WRC). **Performance:** It is powered by the iconic 2.0L 4G63 turbocharged engine, officially rated at 276 hp (though often higher in reality), delivered through a sophisticated All-Wheel Drive (AWD) system. **Aerodynamics:** The Evo V is instantly recognizable by its wide-body flares, massive adjustable rear wing, and aggressive front bumper with large fog lights designed for maximum cooling and downforce. **Pros:** Exceptional mechanical grip, razor-sharp handling, and immense tuning potential that makes it a favorite among car enthusiasts. **Cons:** Raw and stiff ride quality that can be punishing for daily city driving, and extremely high maintenance costs for genuine parts. **Legacy:** This model solidified Tommi Makinen's rally dominance and remains a highly sought-after collector's item in Bangladesh's car culture. It is not just a car, but a piece of automotive history for those who crave pure, analog performance.",
  },
  {
    id: 36,
    name: "Lexus RX Series",
    brand: "Lexus",
    engine: "3.5L V6 Hybrid",
    price: "$170,000",
    image: "/Lexus RX Series.webp",
    description:
      "The Lexus RX Series is the pioneer of the luxury crossover segment, blending unparalleled comfort with Japanese precision. **Performance:** The RX 450h features a sophisticated self-charging hybrid system with a 3.5L V6 engine, providing a silent yet powerful driving experience. **Interior Luxury:** The cabin is a sanctuary of Takumi craftsmanship, featuring premium Semi-Aniline leather, laser-cut wood trim, and a 12.3-inch high-resolution touchscreen. **Pros:** Exceptional ride smoothness, world-class reliability, and high resale value in the luxury market. **Cons:** The infotainment touchpad can be distracting to use while driving, and it has less sporty handling compared to European rivals. **Safety:** Equipped with Lexus Safety System+ 2.0, including All-Speed Dynamic Radar Cruise Control and Lane Tracing Assist. It remains the ultimate choice for executives and families who prioritize long-term reliability and a peaceful commute.",
  },
  {
    id: 37,
    name: "Hyundai Santa Fe",
    brand: "Hyundai",
    engine: "1.6L Hybrid",
    price: "$170,000",
    image: "/Hyundai Santa Fe 2024.avif",
    description:
      "The 2024 Hyundai Santa Fe redefines the modern SUV with its radical boxy silhouette and lifestyle-focused features. **Iconic Design:** Its most striking feature is the 'H-shaped' LED signature lighting in both front and rear, which harmonizes with the lower front valance to symbolize the Hyundai brand. **Outdoor Utility:** The massive, world-class 'Terrace-like' tailgate opens wider than previous generations, specifically designed to function as an open porch for camping, tailgating, or urban relaxation. **Interior Innovation:** The cabin features a first-in-class 'Dual Wireless Charging' system and a panoramic curved display. **Pros:** Industry-leading cargo space, sophisticated safety suite with Highway Driving Assist 2, and a bold presence that rivals luxury off-roaders. **Cons:** The ultra-flat rear door design may limit parking in tight garages, and the bold aesthetics might not appeal to traditional SUV buyers. **Efficiency:** The 1.6L Hybrid variant offers an impressive balance of power and fuel savings for eco-conscious families. It is the perfect companion for those who bridge the gap between urban sophistication and rugged adventure.",
  },
  {
    id: 38,
    name: "Nissan Leaf",
    brand: "Nissan",
    engine: "110 kW",
    price: "$170,000",
    image: "/Nissan Leaf 2024.jpg",
    description:
      "The Nissan Leaf is a global pioneer in the mass-market electric vehicle (EV) segment, offering a smooth, silent, and zero-emission driving experience. **Battery & Range:** It comes with highly durable Lithium-ion batteries (40kWh/60kWh) designed to retain over 80% capacity even after 160,000 km of usage. **Charging in BD:** It supports both slow home charging (6-10 hours) and CHAdeMO fast charging, which can juice up the battery to 80% in just 40-60 minutes at growing public charging stations in Dhaka. **Innovation:** Features the 'e-Pedal' for one-pedal driving and 'ProPILOT Assist' for advanced lane control and emergency braking. **Pros:** Zero fuel costs, minimal moving parts reducing maintenance by 40%, and significant tax benefits (low AIT) in Bangladesh for EVs. **Cons:** Battery range can decrease slightly in extreme summer heat due to the air-cooled thermal management system. **Sustainability:** The car is built with recycled materials, making it a complete eco-friendly package. It is the smartest investment for those looking to bypass rising fuel prices while enjoying a high-tech, quiet commute.",
  },
  {
    id: 39,
    name: "Toyota Probox",
    brand: "Toyota",
    engine: "1.5L 1NZ-FE",
    price: "$170,000",
    image: "/Toyota Probox.jpg",
    description:
      "The Toyota Probox Hybrid is the modern evolution of Bangladesh's favorite workhorse, combining legendary durability with exceptional fuel economy. **Hybrid Efficiency:** Powered by a 1.5L 1NZ-FXE engine and Toyota's Hybrid Synergy Drive, it achieves an impressive mileage of 22-26 km/L, making it a profit-making machine for commercial use. **Rugged Utility:** It retains its signature boxy design and leaf-spring rear suspension, allowing it to carry heavy loads of up to 400kg without sagging. **Pros:** Lowest fuel cost in its class, 'bulletproof' reliability, and parts are available in every corner of Bangladesh. **Cons:** Minimal sound insulation leads to road noise, and the basic interior prioritize function over comfort. **Maintenance:** Beyond regular oil changes, the hybrid system requires periodic battery fan cleaning and cooling checks. A genuine hybrid battery replacement in Bangladesh typically costs between 1.8 to 2.5 Lakh BDT and lasts 6-8 years. It is the ultimate practical choice for business owners and budget-conscious long-distance commuters.",
  },

  {
    id: 40,
    name: "bmw m4",
    brand: "bmw",
    engine: "3.0L BMW M TwinPower Turbo I6",
    price: "$170,000",
    image: "/bmw m4.avif",
    description:
      "The BMW M4 is a high-performance masterpiece that balances track-ready power with daily driveability. **Track Mode:** Activating Track Mode silences the infotainment system and driver assistance alerts, allowing the driver to focus entirely on the 503 hp output and the road ahead. **M Drift Analyser:** A dream for enthusiasts, this feature records drift duration, distance, and angle, giving you a star rating for your performance on closed circuits. **Precision Handling:** Equipped with M xDrive and an Active M Differential, it provides a rear-biased setup for maximum agility. **Pros:** Mind-bending acceleration (0-100 km/h in 3.5s), highly customizable M-drive modes, and a rigid carbon-fiber structure. **Cons:** The stiff suspension can be taxing on uneven roads, and the advanced tech requires specialized maintenance. **Maintenance:** Uses high-performance M-specific parts and high-viscosity synthetic oils, requiring service from specialized luxury workshops in Bangladesh. It is the benchmark for performance enthusiasts who demand precision and luxury.",
  },
  {
    id: 41,
    name: "bmw i7",
    brand: "bmw",
    engine: "Dual Electric Motors",
    price: "$170,000",
    image: "/bmw i7.webp",
    description:
      "The BMW i7 is the pinnacle of electric luxury, redefining the flagship executive sedan experience. **Automatic Doors:** It features sensor-controlled automatic doors that open and close gracefully at the touch of a button or via voice command, ensuring a grand entry for passengers. **IconicSounds Electric:** To compensate for the silence of an EV, BMW collaborated with legendary composer Hans Zimmer to create unique auditory 'drive sounds' that react to your acceleration and driving mode. **Cinema on Wheels:** The interior's centerpiece is the 31.3-inch BMW Theater Screen with 8K resolution and built-in Amazon Fire TV for the ultimate rear-seat entertainment. **Pros:** Unmatched cabin quietness, state-of-the-art 'Interaction Bar' with crystalline jewelry effects, and supreme air suspension. **Cons:** The massive size can be challenging for tight city parking, and the futuristic touch-heavy interface has a slight learning curve. **Tech Mastery:** Includes a Sky Lounge panoramic glass roof with integrated LED light threads that match the car's interior mood. It is a masterpiece for those who want a sustainable yet ultra-luxurious lifestyle.",
  },
  {
    id: 42,
    name: "Rolls-Royce Phantom ",
    brand: "Rolls-Royce",
    engine: "6.75L Twin-Turbocharged V12",
    price: "$170,000",
    image: "/Rolls-Royce Phantom.avif",
    description:
      "The Rolls-Royce Phantom VIII is the ultimate symbol of bespoke luxury. **Coach Doors:** It features the legendary rear-hinged 'Coach Doors' that allow passengers to step in and out with unparalleled grace; these doors can be closed automatically from the inside with a gentle touch of a button. **The Gallery:** A world-first in automotive design, the dashboard features a glass-enclosed space called 'The Gallery,' where owners can commission world-class artists to create unique sculptures or paintings to be displayed permanently. **Interior Sanctuary:** With over 130kg of soundproofing and 'Silent-Seal' tires, the cabin remains as quiet as a library even at high speeds. **Pros:** The 'Magic Carpet Ride' air suspension, the iconic Starlight Headliner, and total privacy for rear passengers. **Cons:** Massive footprint makes it impractical for tight urban areas, and maintenance requires specialized flying doctors from Rolls-Royce. It remains the gold standard for those who don't just travel, but arrive.",
  },

  {
    id: 43,
    name: "Audi A5 ",
    brand: "Audi",
    engine: "2.0L Turbocharged I4 with Mild Hybrid",
    price: "$170,000",
    image: "/Audi A5.avif",
    description:
      "The Audi A5 Sportback is a masterpiece of design, combining coupe elegance with four-door practicality. **Matrix LED Technology:** It features intelligent Matrix LED headlights that can partially dim sections of the high beam to avoid blinding oncoming drivers while keeping the rest of the road fully illuminated. **S-Line Package:** This premium trim adds aggressive front and rear bumpers, side sills, and exclusive S-line badging, giving the car a much sportier and more dominant presence. **Interior Excellence:** The cabin is a tech sanctuary, featuring the Audi Virtual Cockpit with a 12.3-inch digital display and 30-color ambient contour lighting. **Pros:** High-speed stability with Quattro AWD, a large power-operated tailgate, and top-tier interior materials. **Cons:** The sporty suspension in the S-line trim can feel slightly firm over Dhaka's broken roads, and the rear middle seat is best suited for shorter trips. **Safety:** Equipped with Audi Pre-Sense city and a 360-degree camera system for effortless urban parking. It is the perfect blend of athletic performance and sophisticated luxury.",
  },
  {
    id: 44,
    name: "mercedes-benz g-class",
    brand: "mercedes-benz",
    engine: "4.0L V8 Biturbo",
    price: "$170,000",
    image: "/mercedes-benz g-class.avif",
    description:
      "The Mercedes-Benz G-Class is an indestructible automotive icon that blends extreme off-road capability with high-end luxury. **Performance:** Moving away from the incorrect V10 specs, it is actually powered by a handcrafted 4.0L V8 Biturbo engine, producing up to 577 hp in the AMG G 63 variant. **Design:** It retains its legendary boxy silhouette, exposed door hinges, and the signature door-closing sound that mimics a bolt-action rifle. **Off-Road Mastery:** Equipped with three 100% locking differentials and a low-range gear, it can conquer terrains where most SUVs fail. **Pros:** Incredible presence, top-tier Burmester surround sound, and massive resale value. **Cons:** Boxy aerodynamics lead to significant wind noise at high speeds and high fuel consumption. It remains the ultimate status symbol for celebrities and adventure seekers alike.",
  },

  {
    id: 45,
    name: "Mahindra Thar",
    brand: "Mahindra",
    engine: "2.0L mStallion Turbo Petrol",
    price: "$170,000",
    image: "/Mahindra Thar.jpg",
    description:
      "The Mahindra Thar is a rugged off-road icon designed for the ultimate adventurer. **Adventure Statistics:** It features a manual shift-on-the-fly 4x4 transfer case with a dedicated 'Low Range' gear, providing a massive crawl ratio for climbing steep, rocky inclines with ease. **Earth Edition Style:** This special edition comes in an exclusive 'Desert Fury' matte finish, featuring desert-themed decals and premium dual-tone interiors with earth-inspired accents. **Capability:** Boasting an impressive 41.2-degree approach angle and 650mm water-wading depth, it can navigate through deep streams and extreme trails. **Pros:** Iconic heritage design, incredible ground clearance (226mm), and a touchscreen infotainment system with off-road telemetry (Adventure Statistics). **Cons:** Limited luggage space with all seats up, and the heavy steering can be tiring for daily city traffic. **Safety:** Includes a built-in roll cage and Electronic Stability Program (ESP) with roll-over mitigation. It remains the most capable and characterful off-roader for those who live life off the grid.",
  },
  {
    id: 46,
    name: "bmw m8",
    brand: "bmw",
    engine: "4.4L V8 with M TwinPower Turbo",
    price: "$170,000",
    image: "/bmw m8.jpg",
    description:
      "The BMW M8 Competition is the brand's flagship performance grand tourer. **M-Dynamic Mode (MDM):** This unique setting allows for controlled wheel slip, giving the driver the freedom to push the car to its limits on tracks while the stability control remains in the background to prevent a complete spin. **Carbon Ceramic Brakes:** For ultimate stopping power, it features optional M Carbon Ceramic brakes that are fade-resistant even under extreme heat, significantly reducing unsprung weight for sharper handling. **Performance:** The 4.4L V8 engine delivers a brutal 617 hp, enabling a 0-100 km/h sprint in just 3.2 seconds. **Pros:** Supercar-level acceleration, luxurious Merino leather interior, and an adaptable M xDrive system with a pure RWD mode. **Cons:** Its wide body can be difficult to manage in tight traffic, and the high-performance tires have a shorter lifespan. **Track Ready:** It includes an 'M Mode' button that adjusts the digital displays and driver assistance systems to 'Sport' or 'Track' settings instantly. It is a true beast in a tuxedo, designed for those who want peak German engineering.",
  },
  {
    id: 47,
    name: "Ford Mustang GT",
    brand: "Ford",
    engine: "5.0L Coyote V8",
    price: "$170,000",
    image: "/Ford Mustang GT 2021.jpg",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 48,
    name: "Ford GT",
    brand: "Ford",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/Ford GT.webp",
    description:
      "The Ford Mustang GT is the quintessential American muscle car, renowned for its raw power and iconic heritage. **Heart of a Beast:** It is powered by the legendary 5.0L 'Coyote' V8 engine, delivering 460 hp and 570 Nm of torque, accompanied by a signature deep exhaust growl. **Performance:** With a 0-100 km/h time of just 4.2 seconds, it offers a thrilling rear-wheel-drive experience. **Pros:** Incredible bang-for-your-buck performance, timeless fastback styling, and a highly customizable digital instrument cluster with Track Apps. **Cons:** Interior plastics can feel basic compared to European rivals, and the rear seats are tight for adults. **Classic Meets Modern:** Features like 'Line Lock' for track burnouts and selectable drive modes make it as fun on a drag strip as it is on a coastal highway. It remains the world's best-selling sports coupe for those who crave soul and speed.",
  },
  {
    id: 49,
    name: "Ford Focus",
    brand: "Ford",
    engine: "2.3L EcoBoost I4",
    price: "$170,000",
    image: "/public/Ford Focus.avif",
    description:
      "The Ford Focus ST is a high-performance hatchback engineered for driving enthusiasts. **Rev-matching Technology:** For the manual transmission variant, it features an intelligent rev-matching system that automatically blips the throttle during downshifts, ensuring smoother transitions and a professional racing feel. **Recaro Sports Seats:** The interior is upgraded with world-renowned Recaro seats, providing exceptional lateral support to keep you firmly in place during spirited cornering. **Performance:** Powered by a 2.3L EcoBoost engine, it delivers a punchy 276 hp, making it one of the fastest in its segment. **Pros:** Incredible agility, 'Selectable Drive Modes' for different track conditions, and a practical 5-door layout. **Cons:** The sporty suspension can feel a bit stiff on uneven city roads, and the exhaust note is quite loud for a family car. It is a 'hot hatch' that brings track-level excitement to your daily commute.",
  },
  {
    id: 50,
    name: "Tesla Model Y",
    brand: "Tesla",
    engine: "5.2L V10",
    price: "$170,000",
    image: "/teslamodel.jpg",
    description:
      "The Audi R8 is a supercar with breathtaking performance, sleek design, and advanced handling.",
  },
  {
    id: 51,
    name: "Tesla Cybertruck ",
    brand: "Tesla",
    engine: "Dual Motor All-Wheel Drive (Electric)",
    price: "$170,000",
    image: "/Tesla Cybertruck.jpg",
    description:
      "The Tesla Model Y is a masterclass in electric efficiency and high-tech utility. **Full Self-Driving (FSD):** Beyond standard Autopilot, the optional FSD capability allows the car to navigate interchanges, suggest lane changes, and even interpret traffic lights and stop signs with minimal driver intervention. **Panoramic Glass Roof:** The entire ceiling is a single piece of UV-protected glass, providing an expansive view of the sky and a spacious, airy feel for all passengers. **Performance:** It offers instant torque, hitting 0-100 km/h in as little as 3.7 seconds in the Performance trim. **Pros:** Industry-leading software with over-the-air updates, vast Supercharger network access, and a massive 2,100+ liters of storage space. **Cons:** The minimalist cabin lacks physical buttons which can be distracting, and the ride quality is on the firmer side. **Safety:** Engineered to be the safest in its class with a low center of gravity and high-strength steel architecture. It is the gold standard for a modern, tech-driven lifestyle.",
  },
  {
    id: 52,
    name: "Tesla Roadster",
    brand: "Tesla",
    engine: "Tri-Motor All-Wheel Drive (Electric)",
    price: "$170,000",
    image: "/Tesla Roadster.avif",
    description:
      "The Tesla Roadster is the ultimate performance machine, designed to shatter world records and outclass supercars twice its price. **Record-Breaking Speed:** Moving away from the incorrect V10 specs, it features an all-electric tri-motor setup that enables a 0-100 km/h sprint in an incredible 1.9 seconds, making it one of the fastest production cars ever. **Extreme Range:** It is projected to have a range of up to 1,000 km on a single charge thanks to its massive 200 kWh battery pack. **Pros:** Mind-bending acceleration, a removable glass roof for an open-air experience, and seating for four in a sleek aero-dynamic body. **Cons:** Production delays have made it hard to acquire, and the high-speed performance requires specialized tires. **SpaceX Package:** Optional cold-gas thrusters (developed with SpaceX) are planned to further improve cornering and even allow for short 'hovering' bursts. It is the future of speed, without a single drop of gasoline.",
  },
  {
    id: 53,
    name: "lamborghini aventador",
    brand: "lamborghini",
    engine: "6.5L V12 Naturally Aspirated",
    price: "$170,000",
    image: "/lamborghini aventador.webp",
    description:
      "The Lamborghini Aventador is an Italian masterpiece that redefined the modern supercar with its aggressive 'stealth fighter' styling and raw power. **V12 Heart:** Moving away from the incorrect V10 specs, it features a massive 6.5L naturally aspirated V12 engine producing up to 770 hp in the SVJ variant. **Extreme Performance:** It can sprint from 0-100 km/h in just 2.8 seconds and has a top speed of over 350 km/h. **Pros:** Iconic scissor doors, unparalleled road presence, and an incredible naturally aspirated exhaust note. **Cons:** Very low ground clearance (100-125 mm) and limited visibility while reversing. **Advanced Tech:** Features 'ALA' (Aerodinamica Lamborghini Attiva) for active aerodynamics and 4-wheel steering for sharp handling. It remains a collector's dream and a true legend of the V12 era.",
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