import { useForm } from "@formspree/react"
import { useContext, useEffect } from "react";
import NotyfContext from "../NotyfContext.ts";
import { useTranslation } from "react-i18next";

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

    return (
        <>
            <h2 className="mb-4 text-5xl block lg:hidden font-bold pb-24 text-center lg:text-start">Contact Me</h2>
            <form onSubmit={handleSubmit} id="contactForm">
                <div className="mb-6 w-[80%] m-auto ">
                    <div className="mx-0 mb-1 sm:mb-6">

                        <div className="relative mb-6">
                            <input type="text" placeholder="John Doe" className="input bg-transparent input-filled peer rounded-none" name="name" id="name" required />
                            <label className="input-filled-label" htmlFor="full-name">{t('contactMe.name')}</label>
                            <span className="input-filled-focused"></span>
                        </div>
                        <div className="relative mb-6">

                            <input type="text" placeholder="+22 13-3456-3456" className="input bg-transparent input-filled peer rounded-none" name="telephone" id="telephone" required pattern="^[\+\(\s.\-\/\d\)]{5,30}$" />
                            <label className="input-filled-label " htmlFor="telephone" >{t('contactMe.phone')}</label>
                            <span className="input-filled-focused"></span>
                        </div>
                        <div className="relative mb-6">

                            <input type="text" placeholder="johndoe@mail.com" className="input bg-transparent input-filled peer rounded-none" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"/>
                            <label className="input-filled-label" htmlFor="email" >{t('contactMe.email')}</label>
                            <span className="input-filled-focused"></span>
                        </div>
                        <div className="relative">

                            <textarea className="h-28 bg-transparent textarea textarea-filled peer rounded-none " placeholder={t('contactMe.enterMessage')} name="message" id="message" required ></textarea>
                            <label className="textarea-filled-label pl-3" htmlFor="message">{t('contactMe.message')}</label>
                            <span className="textarea-filled-focused"></span>
                        </div>
                    </div>

                    <div className="text-center">
                        <button type="submit" disabled={state.submitting} className="w-full rounded-none btn btn-outline btn-primary px-4 font-xl rounded-md sm:mb-0">
                            {t('contactMe.buttonSendMessage')}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}