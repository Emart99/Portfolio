import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import ContactMeModal from "./ContactMeModal";
import { motion } from "framer-motion";


export default function Contact() {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
                ease: "easeOut"
            }
        }
    };

    const fadeInLeft = {
        hidden: {
            opacity: 0,
            x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? -50 : 0,
            y: typeof window !== 'undefined' && window.innerWidth < 1024 ? 30 : 0,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };


    return (
        <section id="contact" className="contact lg:flex lg:items-center lg:mb-none mb-8">
            <div className="mx-0  lg:mx-auto  max-w-7xl px-4 sm:px-5 lg:px-10">
                <motion.h2
                    className="font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl pt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {t("contactMe.title")}
                </motion.h2>
                <div className="flex items-start md:items-stretch justify-center  ">
                    <div className="grid lg:grid-cols-2">
                        <motion.div className="content-baseline  h-full w-full md:w-[50vw]">
                            <motion.ul className="mb-6 md:mb-0"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}>

                                <motion.li className="flex mb-2" variants={fadeInLeft}>
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[mdi--contact] size-7 bg-primary"></span>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            {t('contactMe.mobile')}
                                        </h5>
                                        <p>
                                            +54 11-3771-0208
                                        </p>
                                    </div>
                                </motion.li>
                                <motion.li className="flex mb-2" variants={fadeInLeft}>
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[ic--sharp-email] bg-primary size-7"></span>
                                    </div>
                                    <a className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            Mail
                                        </h5>
                                        <p>
                                            ezequielmartino1999@gmail.com
                                        </p>
                                    </a>
                                </motion.li>
                                <motion.li className="flex mb-2" variants={fadeInLeft}>
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[mdi--github] bg-primary size-7"></span>
                                    </div>
                                    <a href="https://www.github.com/Emart99" target="_blank" className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            Github
                                        </h5>
                                        <p>
                                            github.com/Emart99
                                        </p>
                                    </a>
                                </motion.li>
                                <motion.li className="flex mb-2" variants={fadeInLeft}>
                                    <a>

                                    </a>
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[uil--linkedin] bg-primary size-7"></span>
                                    </div>
                                    <a href="https://www.linkedin.com/in/martino-ezequiel/" target="_blank" className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            LinkedIn
                                        </h5>
                                        <p>
                                            linkedin.com/in/martino-ezequiel/
                                        </p>
                                    </a>
                                </motion.li>
                                <motion.li className="flex mb-10 lg:mb-0" variants={fadeInLeft}>
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[mdi--location] bg-primary size-7"></span>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            {t('contactMe.location')}
                                        </h5>
                                        <p>
                                            Buenos Aires, Argentina
                                        </p>
                                    </div>
                                </motion.li>

                                <button
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="fullscreen-modal"
                                    data-overlay="#fullscreen-modal"
                                    className="w-full rounded-none btn btn-outline btn-primary px-4 font-2xl rounded-md sm:mb-0 block lg:hidden">
                                    {t('contactMe.buttonContact')}
                                </button>
                                <ContactMeModal />
                            </motion.ul>
                        </motion.div>

                        <div className=" max-w-6xl hidden lg:block" id="form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}