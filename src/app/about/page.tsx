import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="about-page bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-black min-h-screen text-white p-8">
      <div className="container mx-auto py-12">
        <h1 className="text-8xl font-bold text-left mb-8 about-us-heading">
        🧔🏽‍♂️
            About Us.</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-2/3 space-y-4">
            <p className="text-3xl leading-relaxed text-white">
            As the name suggests, we provide content tailored towards men who are trying to improve their self-care, self-image, and overall self-esteem. 
            AlphaGrooming was established in 2023 by two lifelong friends, <span className="text-custom-green underline">Dave Robinson</span> and <span  className="text-custom-green underline">Matthew Manning</span>, so for us, this is not just business. 
            It is a meaningful partnership that is driven by a genuine passion for the betterment of men who want to level up their appearance. 

            </p>
            <p className="text-3xl leading-relaxed text-white">
            As aforementioned, the early days of establishment date back to early 2023. 
            We created this platform to not only improve the appearance and boost the confidence of men in today&apos;s society, 
            but we also want to eradicate the perpetually stigma revolving around men who take grooming seriously, 
            we want you to show the world that self-care can be ALPHA. What makes us different from most websites today is that we&apos;re not creating content that we ourselves don&apos;t live by, 
            it&apos;s the complete opposite in fact, what keeps the heart of this platform beating is the mere fact that we live what we teach, that&apos;s what started this all. 
            Two brothers trying to level up their game decided to share all the tips, tricks, failures and victories they faced along their journey combined with a mixture of  meticulous research to brew up what you see today 
            <span className="text-custom-green underline">ALPHAGROOMING</span>.



            </p>
            <p className="text-3xl leading-relaxed text-white">
              Thank you for visiting our blog. We hope you find our content
              helpful and inspiring. If you have any questions or suggestions,
              feel free to{" "}
              <Link href="/contact">
                <span className="underline text-custom-green hover:text-green-400">
                  contact us
                </span>
              </Link>
            </p>
          </div>
          <div className="md:w-1/3 grid grid-cols-2 grid-rows-2 gap-4">
            <div>
              <Image
                src="/about1.avif"
                alt="About Us 1"
                width={250}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/about2.avif"
                alt="About Us 2"
                width={250}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/about5.avif"
                alt="About Us 3"
                width={250}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <Image
                src="/about4.avif"
                alt="About Us 4"
                width={250}
                height={250}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="team-section bg-gradient-to-r from-blue-500 to-green-400 dark:from-black dark:to-gray-800 py-12 px-12 mt-8">
  <div className="container mx-auto">
    <h2 className="text-7xl font-bold text-center mb-8 about-us-heading">Meet Our Team</h2>
    <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="team-member text-center transform transition-all duration-500 hover:scale-110 hover:opacity-100 hover:p-8">
        <Image
          src="/Lead-editor-and-founder.png"
          alt="Founder & Lead Editor"
          width={500}
          height={500}
          className="rounded-3xl mx-auto mb-4 shadow-lg"
        />
        <h3 className="text-5xl font-semibold about-us-heading">Dave Robinson</h3>
        <p className="text-md text-white">Founder & Lead Editor</p>
      </div>
      <div className="team-member text-center transform transition-all duration-500 hover:scale-110 hover:opacity-100 hover:p-8">
        <Image
          src="/Founder-and-engineer.png"
          alt="Founder and Software Engineer"
          width={500}
          height={500}
          className="rounded-3xl mx-auto mb-4 shadow-lg"
        />
        <h3 className="text-5xl font-semibold about-us-heading">Matthew Manning</h3>
        <p className="text-md text-white">Founder and Software Engineer</p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default AboutPage;
