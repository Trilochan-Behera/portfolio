import { LiaIndustrySolid } from 'react-icons/lia';
import LeftShow from "./Animation/LeftShow";
import RightShow from "./Animation/RightShow";
import { calculateExperience } from '../resources/resource';

export default function ExperienceCards() {
  return (
    <div className="w-full mx-auto md:my-8 grid sm:grid-cols-3 gap-2">
      {/* Left card animation */}
      <RightShow className="sm:hidden w-full bg-primary border shadow-xl border-white-300  py-4 px-3 text-md flex flex-col justify-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://www.infosys.com/' target='_blank'><p className="text-white-500 font-extrabold italic "> Infosys Limited </p></a>
        <p className="text-white-500 font-medium text-xs">23rd Dec 2024 - Present ({calculateExperience("2024-12-23")})</p>
        <p className="text-white-500 font-medium text-xs"> Senior Associate Consultant  </p>
        <p className="text-white-500 font-medium text-xs">Odisha - Hybrid</p>
      </RightShow>
      
      <LeftShow className="w-full bg-white-500 border shadow-xl hidden sm:block border-white-300 sm:mt-40 py-4 px-3 text-md flex flex-col justify-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://hyscaler.com/' target='_blank'> <p className="text-primary font-extrabold italic"> Hyscaler </p> </a>
        <p className="text-primary font-medium text-xs ">8th Nov 2021 - 7th Jun 2024 (2.7 yrs) </p>
        <p className="text-primary font-medium text-xs"> Software Development Engineer - I </p>
        <p className="text-primary font-medium text-xs ">Odisha - Onsite </p>
      </LeftShow>

      {/* Right card animation */}
      <LeftShow className=" w-full bg-white-500 text-primary py-4 px-3 text-md shadow-xl sm:mt-20 flex flex-col justify-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-white-500">
          <LiaIndustrySolid color="white" />
        </div> */}
        <a href='https://user.powrofyou.com/' target='_blank'><p className="text-primary font-extrabold italic "> Powr of You Ltd </p></a>
        <p className="text-primary font-medium text-xs ">15th Jun 2024 - 20th Dec 2024 (0.7 yrs) </p>
        <p className="text-primary font-medium text-xs"> Software Developer </p>
        <p className="text-primary font-medium text-xs">Odisha - Remote </p>
      </LeftShow>

      {/* Left card animation */}
      
      <RightShow className="hidden sm:block w-full bg-primary border shadow-xl border-white-300  py-4 px-3 text-md flex flex-col justify-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://www.infosys.com/' target='_blank'><p className="text-white-500 font-extrabold italic "> Infosys Limited </p></a>
        <p className="text-white-500 font-medium text-xs ">23rd Dec 2024 - Present ({calculateExperience("2024-12-23")}) </p>
        <p className="text-white-500 font-medium text-xs"> Senior Associate Consultant </p>
        <p className="text-white-500 font-medium text-xs ">Odisha - Hybrid </p>
      </RightShow>
      
      <LeftShow className="sm:hidden w-full bg-white-500 border shadow-xl border-white-300 sm:mt-40 py-4 px-3 text-md flex flex-col justify-center h-28 overflow-auto">
        {/* <div className="text-center text-[2.5rem] text-white rounded-full p-4 border-2 border-primary shadow-xl text-primary">
          <LiaIndustrySolid />
        </div> */}
        <a href='https://hyscaler.com/' target='_blank'> <p className="text-primary font-extrabold italic"> Hyscaler </p> </a>
        <p className="text-primary font-medium text-xs">08th Nov 2021 - 07th Jun 2024 (2.7 yrs) </p>
        <p className="text-primary font-medium text-xs"> Software Development Engineer - I </p>
        <p className="text-primary font-medium text-xs">Odisha - Onsite </p>
      </LeftShow>
    </div>
  );
}
