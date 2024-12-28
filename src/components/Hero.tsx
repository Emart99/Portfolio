import { useTranslation } from "react-i18next";
import coffeeHero from "../images/coffeeHero.webp";

export default function Hero() {
    const { t, i18n } = useTranslation()
    
    const getCurrentCvLenguaje = () => {
        if (i18n.language === "es") {
            return ("https://drive.google.com/file/d/1VCbL_cnYf-aYwT4m08whIVuUXNjVObcU/view")
        } else {
            return ("https://drive.google.com/file/d/1HKLSDtV8yMQJHmZQVMpEimBQHM03IY1X/view")
        }
    }


    return (
        <section id="home" className="pt-0 lg:pl-8 hero">
            <div className="absolute top-0 -z-10 h-full w-[95vw] ">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]">
                </div>
            </div>
            <div
                className="rounded-2xl py-10 overflow-hidden p-5 lg:m-0 2xl:py-16 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
                <div className="mx-auto pt-10 max-w-7xl px-4 sm:px-5 lg:px-8">
                    <div className="motion-preset-slide-up motion-duration-1500 motion-delay-[400ms] lg:h-screen h-full grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
                        <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0 text-base">
                            <p className="text-3xl text-center lg:text-left ">
                                Ezequiel Martino
                            </p>
                            <div className="w-full flex justify-center lg:justify-start ">
                                <h1 className="w-auto text-center relative z-[1]  font-bold font-manrope text-5xl lg:text-left leading-[70px]">
                                    Fullstack Developer<span className="from-primary absolute -start-0.5 bottom-1 -z-[1] h-0.5 w-full bg-gradient-to-r to-transparent to-80%" aria-hidden="true"></span>
                                </h1>
                            </div>

                            <div className="pb-7 pt-2 flex w-full flex-wrap gap-3 justify-center lg:justify-normal md:justify-center sm:justify-center">
                                <a target="_blank" href="https://www.github.com/Emart99" className="no-animation btn btn-circle btn-primary btn-outline " aria-label="Github Outline Icon Button">
                                    <span className="icon-[mdi--github] size-7"></span>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/martino-ezequiel" className="no-animation btn btn-circle btn-primary btn-outline" aria-label="Linkedin Outline Icon Button">
                                    <span className="icon-[uil--linkedin] size-7"></span>
                                </a>
                            </div>
                            <div className="w-full flex justify-center lg:justify-normal md:justify-center sm:justify-center">
                                <a href={getCurrentCvLenguaje()} target="_blank" className="no-animation rounded-none btn btn-outline btn-primary text-l" >
                                    {t('hero.resume')}
                                </a>
                            </div>
                        </div>
                        <div className="w-full xl:col-span-7  lg:col-span-6 block">
                            <div className="w-full  sm:w-auto lg:w-[76rem] xl:ml-16">
                                <img src={coffeeHero} alt="Dashboard image" className="rounded-l-3xl object-cover w-full  lg:h-auto " />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );

};



