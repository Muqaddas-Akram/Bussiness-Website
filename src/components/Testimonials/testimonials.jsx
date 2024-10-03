import React, { useState, useEffect } from "react";
import Star from '../../assets/Images/images.png';
import { FaStar } from "react-icons/fa";

function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Holden Caulfield",
      role: "Business Manager",
      text: "Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing.",
    },
    {
      name: "Alper Kamu",
      role: "Business Manager",
      text: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi.",
    },
    {
      name: "Mike Hawkes",
      role: "Business Manager",
      text: "Great company, helpful and always available when required.",
    },
    {
      name: "Kevin Dowling",
      role: "Business Manager",
      text: "Fidelity is an excellent telecoms provider. The levels of support we receive pre and post-sales are second to none.",
    },
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="container mx-auto text-gray-600 body-font px-4">
        <div className="py-24 mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="relative">
            <div className="flex overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  width: `${totalSlides * 100}%`,
                }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0  mb-10 flex flex-col md:flex-row items-center justify-around px-4"
                  >
                    {testimonials
                      .slice(slideIndex * 2, slideIndex * 2 + 2)
                      .map((testimonial, index) => (
                        <div
                          key={index}
                          className="flex flex-col md:w-5/12 bg-white p-8 rounded-lg shadow-md mb-6 md:mb-0"
                        >
                          <div className="flex items-center mb-4">
                            <img
                              alt="testimonial"
                              src={Star}
                              className="w-16 h-16 rounded-full object-cover object-center"
                            />
                            <div className="flex-grow flex flex-col pl-4">
                              <span className="title-font font-medium text-gray-900 text-lg">
                                {testimonial.name}
                                <span className="text-xs text-gray-500 block">
                                  {testimonial.role}
                                </span>
                              </span>
                              <div className="flex mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <FaStar key={i} className="text-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="leading-relaxed">{testimonial.text}</p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                    index === currentSlide ? "bg-teal-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default Testimonial;
