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
          href="/Resume-Aditi.pdf"
          download="Resume-Aditi.pdf"
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
          Skilled software developer with strong expertise in JavaScript, specializing in popular technologies like Next.js, MongoDB, PostgreSQL, and Express.js. Proficient in data structures and algorithms (DSA) with familiarity in TypeScript. Proven track record in contributing to web application development and implementing advanced functionalities.
        </p>

        <h2 className="text-lg font-semibold mb-4">EXPERIENCE</h2>
        <div className="mb-6">
          <h3 className="font-semibold">React.js Developer</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">IOSC, Usar | Sept 2023 - Feb 2024</p>
          <ul className="list-disc pl-6">
            <li>Contributed to the development of the college{"'"}s food ordering app using React.js.</li>
            <li>Implemented advanced search functionalities including fuzzy matching and category filters.</li>
            <li>Developed cart management features, optimizing the checkout process with real-time subtotal calculations.</li>
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
          <h3 className="font-semibold">OpinionZ.com</h3>
          <p className="mb-2">Developed a web-app in Next.js enabling users to share opinions anonymously and fact-check with a single click.</p>
          <p className="italic mb-2">Technologies: Next.js, MongoDB, Node.js, TypeScript, OpenAI API, Tailwind CSS.</p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold">Shivalik Study Circle Web-App (Freelance Project)</h3>
          <p className="mb-2">Created a website for a coaching institute allowing teachers to upload notes, write blogs, and make announcements through an admin dashboard.</p>
          <p className="italic mb-2">Technologies: Next.js, MongoDB, Node.js, TypeScript, Content Management System, Tailwind CSS.</p>
        </div>

        <h2 className="text-lg font-semibold mb-4">SKILLS</h2>
        <div className="mb-6">
          <p>
            <strong>Languages:</strong> JavaScript, C/C++, Python, HTML, CSS, TypeScript, SQL
          </p>
          <p>
            <strong>Frameworks:</strong> Next.js, Express.js, React.js
          </p>
          <p>
            <strong>Tools:</strong> Git/Github, Postman
          </p>
          <p>
            <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Django (familiar)
          </p>
        </div>

        <h2 className="text-lg font-semibold mb-4">ACCOMPLISHMENTS</h2>
        <ul className="list-disc pl-6">
          <li>First position in WeHack Hackathon.</li>
          <li>Top 10 in VC Innovation Challenge Hackathon.</li>
          <li>Third position in HackHeaven Hackathon.</li>
        </ul>
      </div>
    </div>
    </TracingBeam>
  );
};

export default Resume;
