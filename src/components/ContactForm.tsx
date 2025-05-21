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
                <div className="mb-6 w-[80%] m-auto rounded-lg ">
                    <div className="mx-0 mb-1 sm:mb-6">
                        <div className="mb-6">
                            <div className="input-group-filled  rounded-t-sm">
                                <span className="input-group-text ">
                                    <span className="icon-[tabler--user] text-base-content/80 size-6"></span>
                                </span>
                                <div className="relative grow ">
                                    <input type="text" placeholder="John Doe" className="input input-filled peer " name="name" id="name" required />
                                    <label className="input-filled-label text-lg" htmlFor="full-name">{t('contactMe.name')}</label>
                                </div>
                            </div>
                            <span className="input-filled-focused"></span>
                        </div>

                        <div className="mb-6">
                            <div className="input-group-filled rounded-t-sm">
                                <span className="input-group-text">
                                    <span className="icon-[mdi-light--phone] text-base-content/80 size-6"></span>
                                </span>
                                <div className="relative grow">
                                    <input type="text" placeholder="+22 13-3456-3456" className="input  input-filled peer rounded-none" name="telephone" id="telephone" required pattern="^[\+\(\s.\-\/\d\)]{5,30}$" />
                                    <label className="input-filled-label text-lg" htmlFor="telephone" >{t('contactMe.phone')}</label>
                                </div>
                            </div>
                            <span className="input-filled-focused"></span>
                        </div>

                        <div className="mb-6">
                            <div className="input-group-filled rounded-t-sm">
                                <span className="input-group-text">
                                    <span className="icon-[ic--outline-email] text-base-content/80 size-6"></span>
                                </span>
                                <div className="relative grow">
                                    <input type="text" placeholder="johndoe@mail.com" className="input  input-filled peer rounded-none" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" />
                                    <label className="input-filled-label text-lg" htmlFor="email" >{t('contactMe.email')}</label>
                                </div>
                            </div>
                            <span className="input-filled-focused"></span>
                        </div>

                        <div className="mb-6">
                            <div className="input-group-filled rounded-t-sm">
                                <span className="block pt-4  input-group-text">
                                    <span className="icon-[mdi-light--message] text-base-content/80 size-6"></span>
                                </span>
                                <div className="relative grow">
                                    <textarea className="h-40 border-b-0 hover:border-b-0  bg-inherit textarea textarea-filled peer rounded-none" placeholder={t('contactMe.enterMessage')} name="message" id="message" required ></textarea>
                                    <label className="textarea-filled-label pl-3 text-lg" htmlFor="message">{t('contactMe.message')}</label>
                                </div>
                            </div>
                            <span className="input-filled-focused"></span>
                        </div>


                    </div>

                    <div className="text-end">
                        <button type="submit" disabled={state.submitting} className="rounded-none btn btn-outline btn-primary px-4 text-lg rounded-md sm:mb-0">
                            {t('contactMe.buttonSendMessage')}
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}