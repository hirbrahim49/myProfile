"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ibrahim from "../../../../public/img/hirbrahim2.jpg";
import { IoPerson } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdVerified } from "react-icons/md";
import { IoMailUnreadSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Profile1 = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../../../public/pdf/CV.pdf'; // Path to your PDF file
    link.setAttribute('download', 'CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    gsap.fromTo(
      '.image-animate',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: '.image-animate', start: "top 80%" } }
    );

    gsap.fromTo(
      '.text-animate',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, ease: "power3.out", scrollTrigger: { trigger: '.text-animate', start: "top 85%" } }
    );

    gsap.fromTo(
      '.box-animate',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: '.box-animate', start: "top 85%" } }
    );
  }, []);

  return (
    <div className='w-full flex flex-col items-center'>
      {/* Top Section */}
      <section className='w-11/12 md:w-4/5 lg:w-3/5 h-screen flex flex-col md:flex-row items-center justify-center gap-8 text-center'>
        <div className='image-animate'>
          <Image className='w-72 h-72 rounded-full shadow-xl transition-transform duration-500 hover:scale-110' src={ibrahim} alt='Ibrahim' />
        </div>
        <div className='flex flex-col items-center text-animate'>
          <h2 className='text-2xl font-bold'>Hello, I'm</h2>
          <h1 className='text-3xl md:text-4xl font-serif font-bold'>HORDEYEMI HIRBRAHIM</h1>
          <h2 className='text-2xl font-bold'>FULLSTACK DEVELOPER</h2>
          <div className='flex gap-6 mt-6'>
            <a
              className="bg-green-500 text-white px-6 py-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
              target='_blank' href="https://docs.google.com/document/d/1uGJVH-ew49VcQzOVjIAzVI1on8WBUVIvZjvb7cbtJl0/edit?usp=sharing"
            >
              Download CV
            </a>
            <a
              className="bg-blue-500 text-white px-6 py-3 rounded-full transition-transform duration-300 hover:scale-110 shadow-lg"
              href='#contact'
            >
              Contact Info
            </a>
          </div>
          <div className='flex gap-6 mt-6 text-3xl icons-animate'>
            <FaGithub className='hover:text-gray-800 transition duration-300' />
            <BsLinkedin className='hover:text-blue-700 transition duration-300' />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="w-full flex flex-col items-center mt-20">
        <h2 className='text-lg text-gray-700'>Get to know more</h2>
        <h1 className='text-4xl font-bold mb-12'>About Me</h1>
        <div className='w-full flex flex-col lg:flex-row lg:justify-around items-center gap-10 lg:w-4/5'>
          <div className='w-full lg:w-1/3'>
            <Image className='w-72 h-72 rounded-lg mx-auto shadow-2xl transition-transform duration-500 hover:scale-105' src={ibrahim} alt='Ibrahim' />
          </div>
          <div className='w-full lg:w-2/3 flex flex-col gap-8 text-animate'>
            <div className='flex flex-col lg:flex-row gap-10 justify-around'>
              <div className='flex flex-col items-center border-2 border-gray-300 p-6 rounded-lg transition-transform duration-500 hover:shadow-lg'>
                <IoPerson className='text-4xl mb-2' />
                <h3 className='text-2xl font-semibold'>Experience</h3>
                <p className='text-lg'>2+ years in Web Development</p>
              </div>
              <div className='flex flex-col items-center border-2 border-gray-300 p-6 rounded-lg transition-transform duration-500 hover:shadow-lg'>
                <GrUserExpert className='text-4xl mb-2' />
                <h3 className='text-2xl font-semibold'>Education</h3>
                <p className='text-lg'>Obafemi Awolowo University</p>
                <p>A university Student</p>
              </div>
            </div>
            <p className='text-center lg:text-left'>
              "Success is not just about talent; it's about effort, consistency, and determination. Every small step forward brings you closer to your goals. Stay focused, work hard, and remember that persistence beats resistance."
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className='w-full flex flex-col items-center mt-20'>
        <h2 className='text-lg text-gray-700'>Explore My</h2>
        <h1 className='text-4xl font-bold mb-12'>Experience</h1>
        <div className='flex flex-col md:flex-row justify-center items-center w-[80%] mx-auto gap-8'>
          <section className='flex flex-col justify-center gap-8 border-2 border-black h-[350px] items-center rounded-2xl w-full md:w-[45%] transition-transform duration-500 hover:shadow-2xl box-animate'>
            <h1 className='text-2xl text-gray-800 font-semibold'><b>Frontend Development</b></h1>
            <div className='flex flex-wrap justify-center items-center gap-6'>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> HTML</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> CSS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> TAILWIND CSS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> REACT.JS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> NEXT.JS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> JAVASCRIPT</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> TYPESCRIPT</h1>
            </div>
          </section>
          <section className='flex flex-col justify-center gap-8 border-2 border-black h-[350px] items-center rounded-2xl w-full md:w-[45%] transition-transform duration-500 hover:shadow-2xl box-animate'>
            <h1 className='text-2xl text-gray-800 font-semibold text-center'><b>Backend Development</b></h1>
            <div className='flex flex-wrap justify-center items-center gap-6'>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> EXPRESS.JS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> NODE.JS</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> MONGODB</h1>
              <h1 className='text-xl flex items-center font-sans'><MdVerified className='mr-2' /> GIT</h1>
            </div>
          </section>
        </div>
      </section>

      {/* Contact Section */}
      <section className='w-full h-[500px] flex flex-col gap-[25px] justify-center items-center mt-20'>
        <h2 className='text-[30px]'>Get in Touch</h2>
        <h1 className='text-[40px]'><b>Contact Me</b></h1>
        <button className='flex flex-col  md:flex md:flex-row lg:flex lg:flex-row justify-center items-center h-[100px] md:h-[700px] lg:h-[70px]  w-[100%] md:w-[30%] lg:w-[30%] bg-black text-white rounded-[30px] shadow-lg hover:shadow-xl transition duration-500'>
          <IoMailUnreadSharp className='mr-2' /> odeyemiibrahim49@gmail.com <FaPhoneAlt className='ml-4' /> +2349044174371
        </button>
      </section>
    </div>
  );
};

export default Profile1;
