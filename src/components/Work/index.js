import React from "react";

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

import Img1 from '../../assets/portfolio-01.png';
import Img2 from '../../assets/portfolio-img2.png';
import Img3 from '../../assets/portfolio-img3.png';

export function Work() {
  return (
    <section className="section" id='work'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* Text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>

              <p className="max-w-sm mb-16">
                Previews of developer projects, with availability on git hub for
                analysis and access. They include study and
              </p>

              <button className="btn btn-sm">
                <a href="https://github.com/LucasGabryellll" target="_blank">
                  View all Projects
                </a>
              </button>
            </div>
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"></div>

              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="image"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24
               transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Designer</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50">
                <span className="text-3xl text-white">NZ Flix</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10">
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"></div>

              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="image"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24
               transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Designer</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50">
                <span className="text-3xl text-white"> Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className=" group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"></div>

              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="image"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24
               transition-all duration-500 z-50"
              >
                <span className="text-gradient">UI/UX Designer</span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14
               transition-all duration-700 z-50">
                <span className="text-3xl text-white"> Project Title</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}