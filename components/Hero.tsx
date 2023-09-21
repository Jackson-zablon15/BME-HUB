"use client"
import { hero } from "@/public/assets";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section className="relative w-[100vw] h-[80vh] bg-[url('/assets/home/hero.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-br from-black to-gray-700 opacity-60">

      </div>
      <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col bg-gradient-to-r from-violet-500 to-pink-500 dark:bg-glassmorphism p-4 text-center mx-auto max-xs:w-[80vw] rounded-md ">
          <h2 className="font-bold">WELCOME TO BME HUB</h2>
          <p className="mt-4  ">
            We connect all biomedical personnels togother to make a community
            that can learn, share and connect each other.
          </p>
        </div>
        <Button className="bg-btn-color block mx-auto mt-8 text-white">
          <Link href="/">Join Our Community </Link>
        </Button>
      </div>

      <div className="absolute bottom-8 left-[50%] -translate-x-1/2 rounded-3xl w-[32px] h-[60px] border-4 bg-indigo-700 border-orange-200 p-2 flex items-center">
            <motion.div
              className="w-3 h-3 cursor-pointer rounded-full bg-slate-50 mb-6"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>

    </section>
  );
};

export default Hero;
