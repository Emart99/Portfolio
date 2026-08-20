import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"
import Card from './Card'
import tramoImg from '/tramo.webp?url'
import tramoEditorImg from '/tramo-editor.webp?url'
import tramoExploreImg from '/tramo-explore.webp?url'
import tramoProfileImg from '/tramo-profile.webp?url'
import tramoLoginImg from '/tramo-login.webp?url'
import rampAppImg from '/rampapp.webp?url'
import infDsbotImg from '/dsbot.webp?url'
import portfolioImg from '/portfolio.webp?url'
import metronomeImg from '/metronome.webp?url'
import challengeImg from "/challenge.webp?url"
import microserviceInitializrImg from "/microservice-initializr.webp?url"

export default function Projects() {
  const { t } = useTranslation()

  const tramoShots = [tramoEditorImg, tramoExploreImg, tramoProfileImg, tramoLoginImg]

  const tramoStack = [
    { name: 'Next.js', icon: 'icon-[simple-icons--nextdotjs]' },
    { name: 'React', icon: 'icon-[mdi--react] bg-white' },
    { name: 'Java', icon: 'icon-[ri--java-fill]' },
    { name: 'SpringBoot', icon: 'icon-[simple-icons--springboot]' },
    { name: 'PostgreSQL', icon: 'icon-[simple-icons--postgresql]' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  }

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 60,
      transition: { duration: 0.6 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const titleVariants = {
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
  }

  return (
    <section id="projects" className="proyects">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <motion.h2
          className="pt-16 font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {t('projects.title')}
        </motion.h2>
        <motion.div
          className="pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <span className="text-primary text-sm uppercase tracking-[0.3em]">{t('projects.featured')}</span>
            <span className="h-px grow bg-primary/30"></span>
          </motion.div>

          <div className="lg:flex lg:items-end lg:gap-10 mb-8">
            <motion.div variants={fadeInUp} className="lg:w-1/2">
              <h3 className="font-heading font-bold text-6xl mb-3">Tramo</h3>
              <p className="text-2xl text-base-content/70">{t('projects.tramoTagline')}</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="lg:w-1/2 mt-6 lg:mt-0">
              <p className="text-xl">{t('projects.tramo')}</p>
              <div className="inline-flex flex-wrap items-center gap-2 mt-4">
                {tramoStack.map((tecnology, index) => (
                  <div key={index} className="rounded-sm p-1.5 flex gap-2 bg-primary text-white items-center">
                    <span className={`${tecnology.icon} size-4`}></span>
                    <p className="text-md">{tecnology.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-6">
                <a target="_blank" href="https://github.com/tramodev/tramo-frontend" className="text-lg btn btn-outline btn-primary rounded-none"><span className="icon-[line-md--github]"></span> {t('projects.frontendButton')}</a>
                <a target="_blank" href="https://github.com/tramodev/tramo-api" className="text-lg btn btn-outline btn-primary rounded-none"><span className="icon-[line-md--github]"></span> {t('projects.apiButton')}</a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="overflow-hidden rounded-sm shadow-sm">
            <img className="w-full" src={tramoImg} alt="Tramo" />
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {tramoShots.map((shot, index) => (
              <div key={index} className="overflow-hidden rounded-sm shadow-sm">
                <motion.img whileHover={{ scale: 1.05 }} className="w-full" src={shot} alt="Tramo" />
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card
              projectName="RampApp"
              description={t('projects.rampApp')}
              imgUrl={rampAppImg}
              tecnologies={[{ name: 'React Native', color: 'bg-blue-500', icon: 'icon-[tabler--brand-react-native]' }, { name: 'Paper', color: 'bg-indigo-600', icon: 'icon-[mdi--paper]' }, { name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }]}
              repoUrl='https://github.com/Emart99/RampApp'
              buttonText={t('projects.codeButton')}
              buttonIcon="icon-[line-md--github]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="iNF-dsbot"
              description={t('projects.inf-dsBot')}
              imgUrl={infDsbotImg}
              tecnologies={[{ name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill] bg-white' }, { name: 'Discord4J', color: 'bg-indigo-700', icon: 'icon-[ic--baseline-discord]' }]}
              repoUrl='https://github.com/Emart99/iNF-discordBot'
              buttonText={t('projects.codeButton')}
              buttonIcon="icon-[line-md--github]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="Portfolio"
              description={t('projects.portfolio')}
              imgUrl={portfolioImg}
              tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' }, { name: 'Flyonui', color: 'bg-violet-800', icon: 'icon-[arcticons--fly-delta]' }, { name: 'i18n', color: 'bg-blue-500', icon: 'icon-[simple-icons--i18next]' }]}
              repoUrl='https://ezequiel-martino-portfolio.netlify.app/'
              buttonText="Link"
              buttonIcon="icon-[line-md--link]"
              repoUrl2='https://github.com/Emart99/Portfolio'
              buttonText2={t('projects.codeButton')}
              buttonIcon2="icon-[line-md--github]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="CoolMetronome"
              description={t('projects.metronome')}
              imgUrl={metronomeImg}
              tecnologies={[{ name: 'React', color: 'bg-black', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' },]}
              repoUrl='https://coolmetronome.netlify.app/'
              buttonText="Link"
              buttonIcon="icon-[line-md--link]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="Challenge-Frontend"
              description={t('projects.challenge')}
              imgUrl={challengeImg}
              tecnologies={[{ name: 'React', color: 'bg-black', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' },]}
              repoUrl='https://simulador-comisiones.netlify.app/'
              buttonText="Link"
              buttonIcon="icon-[line-md--link]"
              buttonText2={t('projects.codeButton')}
              buttonIcon2="icon-[line-md--github]"
              repoUrl2="https://github.com/Emart99/desafio-sinergia-creativa"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="Spring Microservice Initializr"
              description={t('projects.spring-microservice')}
              imgUrl={microserviceInitializrImg}
              tecnologies={[{ name: 'React', color: 'bg-black', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' }, { name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' },]}
              repoUrl='https://spring-microservice-initializr.netlify.app/'
              buttonIcon="icon-[line-md--link]"
              buttonText="Link"
              buttonText2={t('projects.codeButton')}
              buttonIcon2="icon-[line-md--github]"
              repoUrl2="https://github.com/Emart99/microservice-initializr"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}