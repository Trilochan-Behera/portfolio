import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";
import ExperienceCards from "./ExperienceCards";

const Experience = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <Heading>Experience</Heading>
      <SubHeading>Professional Expertise</SubHeading>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 justify-center ">
        <ScrollAnimationWrapper className="flex w-full justify-end ">
          <motion.div className="h-full w-full p-4 flex justify-center lg:justify-start" variants={scrollAnimation}>
            <img
              src="./Images/svg/software.svg"
              alt="professional"
              layout="responsive"
              quality={100}
              height={400}
              width={280}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <div className="col-span-2">
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-full" variants={scrollAnimation}>
              <ExperienceCards/>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Experience;
