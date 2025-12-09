import React, { useState } from "react";
import { projects } from "../resources/resource";
import { IoLogoGithub, IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import Slider from "react-slick";

const ProjectCard = () => {
  const settings = {
    dots: true,
    customPaging: () => (
      <span className="flex h-2.5 w-2.5 rounded-full bg-gray-300 hover:bg-primary transition" />
    ),
    dotsClass: "slick-dots flex gap-2 mt-6 justify-center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider {...settings} arrows={false} ref={setSliderRef}>
        {projects.map((project, index) => (
          <div key={index} className="px-4 py-4">
            <div className="group bg-white rounded-3xl shadow-md border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden h-[45vh] flex flex-col">
              {/* Image */}
              <div className="h-40 w-full overflow-hidden rounded-t-3xl">
                <img
                  src={project.image || "/banner.jpg"}
                  alt="project"
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 capitalize tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                {/* Icons */}
                <div className="flex gap-5 text-xl mt-4">
                  {project.gitLink ? (
                    <a
                      href={project.gitLink}
                      target="_blank"
                      className="text-primary hover:text-primary/80 transition"
                    >
                      <IoLogoGithub />
                    </a>
                  ) : (
                    <span className="text-gray-400"><IoLogoGithub /></span>
                  )}

                  {project.webLink ? (
                    <a
                      href={project.webLink}
                      target="_blank"
                      className="text-primary hover:text-primary/80 transition"
                    >
                      <TbWorldWww />
                    </a>
                  ) : (
                    <span className="text-gray-400"><TbWorldWww /></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Buttons */}
      <div className="flex justify-end mt-6 pr-4 gap-4">
        <button
          onClick={sliderRef?.slickPrev}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          <IoMdArrowBack className="text-xl" />
        </button>

        <button
          onClick={sliderRef?.slickNext}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow border border-primary text-primary hover:bg-primary hover:text-white transition"
        >
          <IoMdArrowForward className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default ProjectCard;