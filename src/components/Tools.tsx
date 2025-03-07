"use client";
import React from "react";

const tools = [
  {
    image: "/images/java.png",
    title: "Java",
    description: "Object-oriented programming language used for backend development",
  },
  {
    image: "/images/python.png",
    title: "Python",
    description: "High-level programming language for AI, ML, and automation",
  },
  {
    image: "/images/c++.png",
    title: "C++",
    description: "Powerful programming language for system and application development",
  },
  {
    image: "/images/mysql.png",
    title: "MySQL",
    description: "Relational database management system",
  },
  {
    image: "/images/git.png",
    title: "Git/GitHub",
    description: "Version control and collaboration platform",
  },
  {
    image: "/images/opencv.png",
    title: "OpenCV",
    description: "Computer vision library for image processing",
  },
  // Add more tools as needed
];

const ToolCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-52 object-contain p-4 drop-shadow-xl bg-white dark:bg-gray-950" />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-white text-sm mt-2 text-center px-4">
          {description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="mt-4 lg:mt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-6xl font-bold antialiased">Tools</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-4 md:w-[80vw] gap-6 p-4">
          {tools.map((tool, index) => (
            <ToolCard
              key={index}
              image={tool.image}
              title={tool.title}
              description={tool.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
