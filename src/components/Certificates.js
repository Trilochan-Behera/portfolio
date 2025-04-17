import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Heading from "./Heading";
import SubHeading from "./Heading/SubHeading";
import { slideImages } from "../resources/resource";

const Certificates = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        dots: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ],
        arrows: false,
    };

    const motionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <ScrollAnimationWrapper>
            
            <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto" id="certificate">
            <Heading>Certificates</Heading>
            <SubHeading>Online Learnings</SubHeading>
                        <div className="slider-container block">
                            <Slider {...settings}>
                                {slideImages.map((slide, index) => (
                                    <motion.div
                                        key={index}
                                        className="h-full"
                                        variants={motionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <img className="object-cover p-4 h-48 w-full sm:h-full sm:w-full" src={slide} alt={`slide-${index}`} />
                                    </motion.div>
                                ))}
                            </Slider>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="flex flex-1 flex-col gap-2">
                                <motion.div
                                    className="flex flex-1 flex-col"
                                    variants={motionVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5 }}
                                >
                                    <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/node.png" alt="node-cert" />
                                </motion.div>
                                <div className="hidden md:flex flex-1 flex-row gap-2">
                                    <motion.div
                                        className="flex flex-1 flex-col"
                                        variants={motionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                    >
                                        <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/js_hackerrank.png" alt="js-cert" />
                                    </motion.div>
                                    <motion.div
                                        className="hidden md:flex flex-1 flex-col"
                                        variants={motionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >
                                        <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/javaScript.jpg" alt="js-cert2" />
                                    </motion.div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-2">
                                <div className="hidden md:flex flex-1 flex-row gap-2">
                                    <motion.div
                                        className="flex flex-1 flex-col"
                                        variants={motionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/react_dev_hackerrank.png" alt="react-cert" />
                                    </motion.div>
                                    <motion.div
                                        className="hidden md:flex flex-1 flex-col"
                                        variants={motionVariants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/react.jpg" alt="react-cert2" />
                                    </motion.div>
                                </div>
                                <motion.div
                                    className="flex flex-1 flex-col"
                                    variants={motionVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <img className="object-cover h-full hover:border-2 hover:border-primary" src="./Images/certificate/js_udemy.png" alt="udemy-cert" />
                                </motion.div>
                            </div>
                        </div>
            </div>
        </ScrollAnimationWrapper>
        
    );
};

export default Certificates;
