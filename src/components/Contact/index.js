import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export function Contact() {
  return (
    <section className="pv-16 lg:section" id='contact'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            method="POST"
            action="https://formsubmit.co/lucas.gabdev@gmail.com"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
            placeholder:text-white focus:border-accent transition-all"
              placeholder="Your message"
              name="message"
              required
            ></textarea>

            <button type="submit" className="btn btn-lg">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}