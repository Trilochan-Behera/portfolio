import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full pt-14"
      id="project"
    >
      
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full  justify-center">
        <Heading>Projects</Heading>
        <SubHeading>My Creations</SubHeading>
          
        <div className="flex flex-col w-full mb-8  text-center" id="testimoni">
          <ScrollAnimationWrapper className="w-full flex flex-col py-8">
            <motion.div variants={scrollAnimation}>
              <ProjectCard />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Project;