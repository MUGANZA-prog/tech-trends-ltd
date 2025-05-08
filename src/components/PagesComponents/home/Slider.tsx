import  { useState, useEffect } from "react";

const slides = [
  {
    image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072234.jpg?t=st=1746682654~exp=1746686254~hmac=664c30910a070e3211f68148dc02a6c50aef44ba94c57f7b24df61ab71c91bb7&w=740",
    description: "Find the best products here",
  },
  {
    image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309648.jpg?t=st=1746682626~exp=1746686226~hmac=937a2b39c13543c7cfdeb79f447b5319ab9ee8d310fa0baa91de97d3472dc476&w=996",
    description: "we add discounts",
  },
  {
    image: "https://img.freepik.com/free-photo/close-up-various-digital-devices_23-2147864668.jpg?t=st=1746682720~exp=1746686320~hmac=cec6e4b2aa21917d7c6c8ce721a0d3b9c5fbf5afd1234c149cf7355e26b092fb&w=740",
    description: "we sell world wide",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-[1040px] h-[350px]  rounded-xl shadow-xl overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-90 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-96 object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className=" text-blue-900 font-bold text-2xl">
              {slide.description}
            </h2>
          </div>
        </div>
      ))}

      {/* Manual controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow hover:bg-blue-700"
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
