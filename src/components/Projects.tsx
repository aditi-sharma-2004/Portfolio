import React from 'react';
import Link from 'next/link';

const projects = [
  {
    name: "Leave Management System",
    description: "A Java-based web application to streamline leave requests and approvals, featuring authentication, role-based access, and MySQL integration.",
    status: "Completed",
    imageUrl: "/images/lms.png",
  },
  {
    name: "Voice-Based Route Finder",
    description: "A Python project utilizing speech recognition and graph algorithms to compute the shortest route between cities.",
    status: "Completed",
    imageUrl: "/images/path.png",
  },
];

const ProjectCard = ({ project }:any) => {
  return (
    <div
      key={project.name}
      className="project-card group rounded-lg bg-white dark:bg-black overflow-hidden shadow-md transform transition-transform hover:scale-105 duration-300"
    >
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-48 object-cover bg-gray-500 dark:bg-gray-700"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 group-hover:text-indigo-600 transition duration-300">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
        <div className="flex items-center mt-4">
          <span className={`inline-block mr-2 text-sm text-gray-500 dark:text-gray-400  `}>
            Status: <span className={`${project.status==="Completed"?"text-green-500 dark:text-green-500":"text-yellow-500  dark:text-yellow-400"}`}>{project.status}</span> 
          </span>
          <Link href={`/projects/${project.name}`}>
            <button className="text-xs text-indigo-600 hover:text-indigo-700 font-bold focus:outline-none">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <section className="project-section py-16 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Projects</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A selection of some recent projects I have worked on.</p>
        </div>
        <div className="grid  gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/projects">
            <button className="px-4 sm:px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 cursor-pointer">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
