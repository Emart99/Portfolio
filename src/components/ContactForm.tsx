import { useForm } from "@formspree/react"
import { useContext, useEffect } from "react";
import NotyfContext from "../NotyfContext.ts";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
export default function ContactForm() {
    const { t } = useTranslation();
    const notyf = useContext(NotyfContext);
    const [state, handleSubmit, reset] = useForm("xwkyjzje");



    useEffect(() => {
        if (state.succeeded) {
            notyf.success(t("toast.success"));
            reset()
        }
        else if (state.errors) {
            notyf.error(t("toast.error"));
            console.log(state.errors)
            reset()
        }
    }, [state]);

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
    const fadeInRight = {
        hidden: {
            opacity: 0,
            x: typeof window !== 'undefined' && window.innerWidth >= 1024 ? 50 : 0,
            y: typeof window !== 'undefined' && window.innerWidth < 1024 ? 30 : 0,
            scale: 0.9,
            transition: { duration: 0.3 }
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <h2 className="mb-4 text-5xl block lg:hidden font-bold pb-24 text-center lg:text-start">Contact Me</h2>
            <form onSubmit={handleSubmit} id="contactForm" autoComplete="false">
                <div className="mb-6 w-[80%] m-auto rounded-lg ">
                    <motion.div className="mx-0 mb-1 sm:mb-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}>
                        <motion.div variants={fadeInRight} className="mb-6">
                            <label className="block mb-2 text-lg" htmlFor="name">{t('contactMe.name')}</label>
                            <input type="text" placeholder="John Doe" className="input input-lg bg-transparent rounded-sm" name="name" id="name" required />
                        </motion.div>
                        <motion.div variants={fadeInRight} className="mb-6">
                            <label className="block mb-2 text-lg" htmlFor="telephone">{t('contactMe.phone')}</label>
                            <input type="text" placeholder="+22 13-3456-3456" className="input input-lg bg-transparent rounded-sm" name="telephone" id="telephone" required pattern="^[\+\(\s.\-\/\d\)]{5,30}$" />
                        </motion.div>
                        <motion.div variants={fadeInRight} className="mb-6">
                            <label className="block mb-2 text-lg" htmlFor="email">{t('contactMe.email')}</label>
                            <input type="text" placeholder="johndoe@mail.com" className="input input-lg bg-transparent rounded-sm" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" />
                        </motion.div>
                        <motion.div variants={fadeInRight} className="mb-6">
                            <label className="block mb-2 text-lg" htmlFor="message">{t('contactMe.message')}</label>
                            <textarea className="h-40 textarea bg-transparent rounded-sm" placeholder={t('contactMe.enterMessage')} name="message" id="message" required ></textarea>
                        </motion.div>
                    </motion.div>

                    <motion.div className="text-start"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}>
                        <motion.button variants={fadeInRight} type="submit" disabled={state.submitting} className="btn btn-outline btn-primary px-4 text-lg rounded-sm sm:mb-0">
                            {t('contactMe.buttonSendMessage')}
                            <span className="icon-[line-md--arrow-right] size-5"></span>
                        </motion.button>
                    </motion.div>
                </div>
            </form>
        </>
    )
}