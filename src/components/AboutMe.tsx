import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function AboutMe() {
  const { t } = useTranslation();

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

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
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
    <section id="aboutme" className="about-me md:mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <motion.h2 
          className="font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {t("aboutMe.title")}
        </motion.h2>
        
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col-reverse md:flex-row"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="md:max-h-96 md:h-screen m-auto mb-10 md:m-0 w-full md:w-1/3"
              variants={fadeInLeft}
            >
              <motion.img 
                className="object-cover object-top" 
                src="https://images.vexels.com/media/users/3/236530/isolated/preview/74e3e0a5c7251f04df9b313cb2407a49-semi-flat-baritone-saxophone.png" 
                alt=""
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ willChange: 'transform' }}
              />
            </motion.div>
            
            <motion.div 
              className="flex order-1 md:order-2 w-full md:w-2/3"
              variants={fadeInRight}
            >
              <motion.div 
                className="mb-auto mt-auto text-xl m-auto"
                variants={containerVariants}
              >
                <motion.p 
                  className="pb-4"
                  variants={fadeInUp}
                >
                  {t('aboutMe.paragraph1Start')} 
                  <span className="text-primary"> {t('aboutMe.paragraph1Accent')}</span>
                  {t('aboutMe.paragraph1End')}.
                </motion.p>
                
                <motion.p 
                  className="pb-4"
                  variants={fadeInUp}
                >
                  {t('aboutMe.paragraph2Start')}
                  <span className="text-primary">{t('aboutMe.paragraph2Java')}</span>
                  {t('aboutMe.paragraph2Middle')} 
                  <span className="text-primary">{t('aboutMe.paragraph2Spring')}</span>
                  {t('aboutMe.paragraph2End')}
                  <span className="text-primary">{t('aboutMe.paragraph2Typescript')}</span>.
                </motion.p>
                
                <motion.p 
                  className="pb-4"
                  variants={fadeInUp}
                >
                  {t('aboutMe.paragraph3')}
                </motion.p>
                
                <motion.p 
                  className="pb-4"
                  variants={fadeInUp}
                >
                  {t('aboutMe.paragraph4')}
                </motion.p>
                
                <motion.p 
                  className="pb-4"
                  variants={fadeInUp}
                >
                  {t('aboutMe.paragraph5')}
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}