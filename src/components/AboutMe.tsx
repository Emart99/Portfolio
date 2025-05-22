import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id="aboutme" className="about-me md:mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <h2 className=" font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl pt-16">{t("aboutMe.title")}</h2>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:max-h-96 md:h-screen m-auto mb-10 md:m-0 w-full md:w-1/3">
              <img className=" object-cover object-top" src="https://images.vexels.com/media/users/3/236530/isolated/preview/74e3e0a5c7251f04df9b313cb2407a49-semi-flat-baritone-saxophone.png" alt="" />
            </div>
            <div className="flex order-1 md:order-2 w-full md:w-2/3">
              <div className="mb-auto mt-auto text-xl m-auto">
                <p className="pb-4">{t('aboutMe.paragraph1Start')} 
                  <span className="text-primary"> {t('aboutMe.paragraph1Accent')}</span>
                  {t('aboutMe.paragraph1End')}.
                </p>
                <p className="pb-4">{t('aboutMe.paragraph2Start')}
                   <span className="text-primary">{t('aboutMe.paragraph2Java')}</span>
                    {t('aboutMe.paragraph2Middle')} 
                    <span className="text-primary">{t('aboutMe.paragraph2Spring')}</span>
                    {t('aboutMe.paragraph2End')}
                    <span className="text-primary">{t('aboutMe.paragraph2Typescript')}</span>.
                  </p> 
                <p className="pb-4">{t('aboutMe.paragraph3')}</p>
                <p className="pb-4">{t('aboutMe.paragraph4')}</p>
                <p className="pb-4">{t('aboutMe.paragraph5')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}