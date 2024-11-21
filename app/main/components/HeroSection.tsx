"use client";

import { buttonVariants } from "@/app/components/ui/button";
import Header from "./Header";
import Link from "next/link";
import { motion } from "framer-motion";

export const MotionButton = motion.button;

export default function HeroSection() {
  return (
    <section className="h-[100vh]">
      <Header />

      <div className="flex justify-center py-[20rem] screen">
        <div className="text-center">
          <h1 className="md:text-[2rem] text-[1.8rem]">
            Welcome to <span className="text-accent">NextKit</span>
          </h1>
          <p>
            Your solution for <span className="text-accent">fast </span>
            development.
          </p>

          <MotionButton whileHover={{scale: 1.1}}>
            <Link
              href={"/pages/auth/signup"}
              className={`${buttonVariants({ variant: "accent" })} mt-[2rem]`}
            >
              Get Started
            </Link>
          </MotionButton>
        </div>
      </div>
    </section>
  );
}
