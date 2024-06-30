import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="about-page bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-black min-h-screen text-white p-8">
      <div className="container mx-auto py-12">
        <h1 className="text-8xl font-bold text-center mb-8 about-us-heading">
        🧔🏽‍♂️
            Contact Us.</h1>
      
      </div>
      <div className="team-section bg-gradient-to-r from-blue-500 to-green-400 dark:from-black dark:to-gray-800 py-12 px-12 mt-8 rounded-lg shadow-lg">
    <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="team-member text-center transform transition-all duration-500 hover:scale-110 hover:opacity-100 hover:p-8 text-left">
        <p className="text-left w-3/4 text-white">
            We are excited to hear from you. Whether you have a question, comment, or just want to say hello, we are here to help.
        

        </p>

        <div className="text-left w-3/4 text-white">
            <h2 className="text-white">For Partnerships and Collaborations</h2>

            <p className="text-white">
            For Partnerships and Collaborations, we are excited to explore potential collaborative opportunities . We firmly believe that collaboration fuels innovation. If you're interested in partnering with us  please feel free to reach out to us at &nbsp;
                <a
                href="mailto:admin@alphagrooming.org" className="underline text-white text-left" style={{ color : 'white !important'}}>
                dave@alphagrooming.org
                </a>    
            </p>
        </div>

        <div className="text-left w-3/4 text-white">
            <h2 className="text-white">General Inquiries</h2>

            <p className="text-white">For any form of General Inquires, whether you need help navigating the website, or making comments about the website asking or questions,  you can reach us at &nbsp;
                <a
                href="mailto:admin@alphagrooming.org" className="underline text-white text-left" style={{ color : 'white !important'}}>
                matthew@alphagrooming.org
                </a>    
            </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AboutPage;
