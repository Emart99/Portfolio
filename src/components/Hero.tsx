import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import coffeeHero from "/coffeeHero.webp?url";

export default function Hero() {
    const { t, i18n } = useTranslation()
    
    const getCurrentCvLenguaje = () => {
        if (i18n.language === "es") {
            return ("https://drive.google.com/file/d/1D9ny4MkBZt0YAv2UfSYpe_UnGovERMym/view")
        } else {
            return ("https://drive.google.com/file/d/1v_2p1xKEqY_KP5f-buN0zywGgh_w80_E/view")
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                ease: "easeOut"
            }
        }
    };

    const fadeInUp = {
        hidden: { 
            opacity: 0, 
            y: 20,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const fadeInLeft = {
        hidden: { 
            opacity: 0, 
            x: -30,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const fadeInRight = {
        hidden: { 
            opacity: 0, 
            x: 30, 
            scale: 0.95,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section id="home" className="pt-0 hero">
            <div className="rounded-2xl py-10 overflow-hidden p-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
                <div className="mx-auto pt-10 max-w-7xl px-4 sm:px-5 lg:px-10">
                    <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                        <motion.div 
                            className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0 text-base"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.p 
                                className="text-3xl text-center lg:text-left"
                                variants={fadeInUp}
                            >
                                Ezequiel Martino
                            </motion.p>
                            
                            <div className="w-full flex justify-center lg:justify-start ">
                                <motion.h1 
                                    className="w-auto text-center relative z-[1]  font-bold font-manrope text-5xl lg:text-left leading-[70px]"
                                    variants={fadeInLeft}
                                >
                                    Web Developer
                                    <span className="from-primary absolute -start-0.5 bottom-1 -z-[1] h-0.5 w-full bg-gradient-to-r to-transparent to-80%" aria-hidden="true"></span>
                                </motion.h1>
                            </div>

                            <motion.div 
                                className="pb-7 pt-2 flex w-full flex-wrap gap-3 justify-center lg:justify-normal md:justify-center sm:justify-center"
                                variants={fadeInUp}
                            >
                                <motion.a 
                                    target="_blank" 
                                    href="https://www.github.com/Emart99" 
                                    className="no-animation btn btn-circle btn-primary btn-outline" 
                                    aria-label="Github Outline Icon Button"
                                    whileHover={{ 
                                        scale: 1.08, 
                                        rotate: 3,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    whileTap={{ 
                                        scale: 0.96,
                                        transition: { duration: 0.1 }
                                    }}
                                >
                                    <span className="icon-[mdi--github] size-7"></span>
                                </motion.a>
                                <motion.a 
                                    target="_blank" 
                                    href="https://www.linkedin.com/in/martino-ezequiel" 
                                    className="no-animation btn btn-circle btn-primary btn-outline" 
                                    aria-label="Linkedin Outline Icon Button"
                                    whileHover={{ 
                                        scale: 1.08, 
                                        rotate: -3,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    whileTap={{ 
                                        scale: 0.96,
                                        transition: { duration: 0.1 }
                                    }}
                                >
                                    <span className="icon-[uil--linkedin] size-7"></span>
                                </motion.a>
                            </motion.div>
                            
                            <motion.div 
                                className="w-full flex justify-center lg:justify-normal md:justify-center sm:justify-center"
                                variants={fadeInUp}
                            >
                                <motion.a 
                                    href={getCurrentCvLenguaje()} 
                                    target="_blank" 
                                    className="no-animation rounded-none btn btn-outline btn-primary text-lg"
                                    whileHover={{ 
                                        scale: 1.03, 
                                        y: -1,
                                        transition: { duration: 0.2, ease: "easeOut" }
                                    }}
                                    whileTap={{ 
                                        scale: 0.98,
                                        transition: { duration: 0.1 }
                                    }}
                                >
                                    {t('hero.resume')}
                                </motion.a>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div 
                            className="w-full xl:col-span-7  lg:col-span-6 block"
                            variants={fadeInRight}
                            initial="hidden"
                            animate="visible"
                        >
                            <div className="w-full  sm:w-auto lg:w-[76rem] xl:ml-16 ">
                                <motion.img 
                                    src={coffeeHero} 
                                    alt="Dashboard image" 
                                    className="rounded-l-3xl object-cover  h-auto lg:h-[767px]"
                                    whileHover={{ 
                                        scale: 1.01,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    style={{ willChange: 'transform' }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}