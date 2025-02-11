import React from "react";

const services = [
  {
    id: 1,
    title: "Video Editing",
    description: "Crafting high-quality, engaging video content with seamless transitions and effects.",
  },
  {
    id: 2,
    title: "Graphic Design",
    description: "Creating stunning visuals, logos, and branding materials that stand out.",
  },
  {
    id: 3,
    title: "Motion Graphics",
    description: "Designing dynamic animations and motion graphics for diverse media platforms.",
  },
  {
    id: 4,
    title: "Photo Retouching",
    description: "Enhancing images with professional editing techniques to achieve perfection.",
  },
  {
    id: 5,
    title: "Social Media Content Creation",
    description: "Designing eye-catching visuals and videos for social media platforms.",
  },
  {
    id: 6,
    title: "Branding & Visual Identity",
    description: "Developing unique branding elements that resonate with your audience.",
  },
];

const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-600 to-pink-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-400 to-pink-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-purple-400 hover:text-pink-500">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
