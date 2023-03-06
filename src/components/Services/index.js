import React from "react";

import { BsArrowUpRight } from 'react-icons/bs';

import { m, motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'User interface designer, always creative and seeking to improve skills with each project delivered',
    link: 'Learn mode',
  },

  {
    name: 'Mobile Developer',
    description: 'Mobile Developer focusing on React Native and Typescript. Building modern and efficient user interfaces.',
    link: 'Learn mode',
  },

  {
    name: 'Front-end Developer',
    description: 'Front end developer focusing on React and Next.JS and Typescript. Ensuring modern and efficient user interfaces.',
    link: 'Learn mode',
  }
]

export function Services() {
  return (
    <section className="section" id='services'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Text and image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Freelancer Front-end and Mobile, Developer with over 3 years of
              experience.
            </h3>

            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* Services */}
          <motion.div
           variants={fadeIn('left', 0.5)}
           initial="hidden"
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          >
            {/* Services List */}
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <div key={index} className="border-b border-white/20 h-[146px] mb-[38px]" >
                    <div className="max-w-[475px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">{name}</h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
     
                      <a href="#" className="text-gradient text-sm">{link}</a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}