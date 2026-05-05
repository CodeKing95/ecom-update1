import React from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tech Enthusiast",
    message:
      "Amazing products and super fast delivery. The quality exceeded my expectations!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Software Developer",
    message:
      "Great customer service and excellent tech gadgets. Everything works perfectly!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Designer",
    message:
      "Beautiful designs and premium quality products. My go-to tech shop!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        <h2 className="text-3xl font-bold mb-3">
          What Our Customers Say
        </h2>

        <p className="text-gray-600 mb-10">
          Real feedback from people who love our products
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />

              <p className="text-gray-700 italic mb-4">
                “{item.message}”
              </p>

              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;