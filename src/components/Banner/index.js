import React from "react";

//import Image from '../../assets/avatar.svg';
import Image from '../../assets/me.png';

import { FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

export function Banner() {
  return (
    <section className="section" id='home'>
      <div className="container mx-auto" >
        <div>
          <h1>
            LUCAS <span>GABRYEL</span>
          </h1>

          <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
            <span className="text-white mr-4">
              I am a 
              <TypeAnimation sequence={[
                ' Developer',
                2000,
                ' Disigner',
                2000,
                ' Student',
                2000
              ]} 
              speed={50}
              className="text-accent"
              wrapper="span"
              repeat={Infinity}
              />
            </span>
          </div>
        </div>

        <div>
          <img src={Image} alt="Image Me" />
        </div>
      </div>
    </section>
  );
}