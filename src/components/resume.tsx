"use client";
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { TracingBeam } from './ui/tracing-beam';

const Resume = () => {
  return (
    <TracingBeam className='px-6 mb-10'>
      <div className="max-w-4xl mt-20 mx-auto p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg transition duration-500 ease-in-out">
        <div className="flex justify-end mb-4">
          <a
            href="/Aditi-Resume.pdf"
            download="Aditi-Resume.pdf"
            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 dark:text-gray-300 focus:outline-none transition duration-500 ease-in-out"
          >
            Download PDF
          </a>
        </div>
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-4 transition duration-500 ease-in-out">Aditi Sharma</h1>
          <div className="flex mb-4 space-x-4">
            <a href="https://www.linkedin.com/in/aditi-sharma-418847202/" className="text-blue-500 hover:underline">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/aditi-sharma-2004" className="text-blue-500 hover:underline">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/ADITISH46189780" className="text-blue-500 hover:underline">
              <FaTwitter size={24} />
            </a>
          </div>
          <p className="mb-6 transition duration-500 ease-in-out">Sector-9, Gurugram, Haryana 122001</p>
          <p className="mb-6 transition duration-500 ease-in-out">+91 9354101082</p>
          <p className="mb-6 transition duration-500 ease-in-out">aditisharma7782@gmail.com</p>

          <h2 className="text-lg font-semibold mb-4">PROFILE SUMMARY</h2>
          <p className="mb-6">
          Software developer with expertise in Java, Python, and backend development. Passionate about open-source contributions, problem-solving, and building scalable applications.
          </p>

          <h2 className="text-lg font-semibold mb-4">EXPERIENCE</h2>
          <div className="mb-6">
            <h3 className="font-semibold">AIC E-Cell Banasthali | Lead</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Sept 2023 – Present</p>
            <ul className="list-disc pl-6">
              <li>Organizing entrepreneurial events, hackathons, and mentorship sessions to foster innovation and startup culture among students.</li>
              <li>Collaborating with industry experts and speakers to conduct impactful sessions.</li>
              <li>Leading a team to manage event planning, outreach, and execution.</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Social Summer of Code (SSoC) & GirlScript Summer of Code (GSSoC) | Contributor</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">2023 – Present</p>
            <ul className="list-disc pl-6">
              <li>Contributed to open-source projects, enhancing coding proficiency and collaboration skills.</li>
              <li>Worked on various repositories, fixing issues, adding features, and improving documentation.</li>
              <li>Engaged with the developer community, participating in discussions and peer reviews.</li>
            </ul>
          </div>

          <h2 className="text-lg font-semibold mb-4">EDUCATION</h2>
          <p className="mb-2">
            <strong>B.Tech in CS</strong> (Ongoing) | Banasthali Vidyapith, Rajasthan | May 2022 - Present
          </p>
          <p className="mb-6">CGPA: 7.69</p>
          <p className="mb-2">
            <strong>12th Grade</strong> (2022) | D.A.V. Public School, Gurgaon
          </p>
          <p className="mb-6">Percentage: 80%</p>
          <p className="mb-2">
            <strong>10th Grade</strong> (2020) | Our Lady Of Fatima Convent School, Gurgaon
          </p>
          <p className="mb-6">Percentage: 94.4%</p>

          <h2 className="text-lg font-semibold mb-4">PROJECTS</h2>
          <div className="mb-6">
            <h3 className="font-semibold">Leave Management System</h3>
            <p className="mb-2">Developed a web-based system to streamline leave requests and approvals.</p>
            <p className="italic mb-2">Technologies: Java, MySQL, Spring Boot.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">Voice-Based Route Finder</h3>
            <p className="mb-2">Created a voice-activated system to compute the shortest route between cities.</p>
            <p className="italic mb-2">Technologies: Python, SpeechRecognition, Graph Theory, CSV.</p>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold">AI-Driven Snake Game</h3>
            <p className="mb-2">Enhanced a classic Snake Game with AI-driven hints to assist players.</p>
            <p className="italic mb-2">Technologies: Python, A* Pathfinding, Pygame.</p>
          </div>
        </div>
      </div>
      <div>
      <div>
          <h2 className="text-lg font-semibold mb-4">SKILLS</h2>
          <div className="mb-6">
            <p>
              <strong>Languages:</strong> Python, C++, JavaScript, TypeScript, SQL
            </p>
            <p>
              <strong>Databases:</strong> MongoDB, MySQL
            </p>
            <p>
              <strong>Tools:</strong> Git/Github, OpenCV, Pygame
            </p>
            <p>
              <strong>Machine Learning:</strong> Scikit-Learn, TensorFlow, NLP
            </p>
          </div>

          <h2 className="text-lg font-semibold mb-4">ACCOMPLISHMENTS</h2>
          <ul className="list-disc pl-6">
            <li>Winner of WeHack Hackathon (Microsoft & Reskill).</li>
            <li>Top 10 finalist in Vice Chancellor Hackathon 2.0.</li>
            <li>Open-source contributor at GSSoC & SSoC.</li>
          </ul>
        </div>
      </div>
    </TracingBeam>
  );
};

export default Resume;
