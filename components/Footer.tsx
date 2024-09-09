import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w[45vw]">
          Elevate Your Digital Presence with{" "}
          <span className="text-purple">Expertise</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s Connect and Explore How We Can Achieve Your Digital Goals
          Together!
        </p>
        <a href="mailto:ahmedrush96@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light md:mb-0 mb-2">
          © 2024 Ahmed Roshdy | All Rights Reserved
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 border border-black-300 rounded-lg"
            >
              <img src={profile.img} alt="contact" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
