"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    message:
      "The services here are excellent, and the user experience is amazing!",
    image: "/images/customer1.jpg",
  },
  {
    name: "Jane Smith",
    message: "A truly satisfying experience! Highly recommend it.",
    image: "/images/customer2.jpg",
  },
  {
    name: "Alice Brown",
    message: "Great service and support. Will definitely come back again.",
    image: "/images/customer3.jpg",
  },
  {
    name: "Michael Johnson",
    message: "The platform is really easy to use and very reliable.",
    image: "/images/customer4.jpg",
  },
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set to true if you want navigation arrows
    fade: true, // Smooth transition
  };

  return (
    <div className="testimonial-container py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
        What Our Customers Say
      </h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-slide flex flex-col items-center justify-center text-center p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s picture`}
                className="rounded-full w-32 h-32 mb-4 object-cover shadow-xl border-4 border-purple-500"
              />
              <p className="text-xl italic mb-4 text-gray-800">
                "{testimonial.message}"
              </p>
              <p className="text-2xl font-semibold text-purple-700">
                {testimonial.name}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
