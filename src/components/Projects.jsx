import React from "react";
import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video4.mp4";

const projects = [
  {
    id: 1,
    name: "Cinematic Reel",
    description: "A high-quality cinematic video reel showcasing my editing skills.",
    video: video1,
  },
  {
    id: 2,
    name: "Motion Graphics Showcase",
    description: "A collection of animated graphics and transitions.",
    video: video2,
  },
  {
    id: 3,
    name: "Branding Video",
    description: "A professional branding video for a business.",
    video: video3,
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Video Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <video controls className="rounded-lg mb-4 w-full h-48 object-cover">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
