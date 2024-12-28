import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";
import ContactMeModal from "./ContactMeModal";

export default function Contact() {
    const { t } = useTranslation()
    return (
        <section id="contact" className="contact lg:flex lg:items-center md:pl-8 lg:mb-none mb-8">
            <div className="mx-0  lg:mx-auto  max-w-7xl px-4 sm:px-5 lg:px-8">
                <h2 className="font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl ">
                    {t('contactMe.title')}
                </h2>
                <div className="flex items-start md:items-stretch justify-center  ">
                    <div className="grid lg:grid-cols-2">
                        <div className="content-baseline  h-full w-full md:w-[50vw]">
                            <ul className="mb-6 md:mb-0">

                                <li className="flex mb-2">
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
                                </li>
                                <li className="flex mb-2">
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[ic--sharp-email] bg-primary size-7"></span>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            Mail
                                        </h5>
                                        <p>
                                            ezequielmartino1999@gmail.com
                                        </p>
                                    </div>
                                </li>
                                <li className="flex mb-2">
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[mdi--github] bg-primary size-7"></span>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            Github
                                        </h5>
                                        <p>
                                            github.com/Emart99
                                        </p>
                                    </div>
                                </li>
                                <li className="flex mb-2">
                                    <div className="flex h-10 w-10 items-center gap-y-3 justify-center rounded bg-base-100">
                                        <span className="icon-[uil--linkedin] bg-primary size-7"></span>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h5 className="text-xl">
                                            LinkedIn
                                        </h5>
                                        <p>
                                            linkedin.com/in/martino-ezequiel/
                                        </p>
                                    </div>
                                </li>
                                <li className="flex mb-10 lg:mb-0">
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
                                </li>

                                <button
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="fullscreen-modal"
                                    data-overlay="#fullscreen-modal"
                                    className="w-full rounded-none btn btn-outline btn-primary px-4 font-2xl rounded-md sm:mb-0 block lg:hidden">
                                    {t('contactMe.buttonContact')}
                                </button>
                                <ContactMeModal />
                            </ul>
                        </div>

                        <div className=" max-w-6xl hidden lg:block  intersect:motion-preset-slide-left motion-duration-1500 intersect-once" id="form">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}