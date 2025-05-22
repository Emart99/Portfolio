import { useTranslation } from 'react-i18next'
import { motion } from "framer-motion"
import Card from './Card'
import difficultImg from '../images/difficult.webp'
import rampAppImg from '../images/rampapp.webp'
import infDsbotImg from '../images/dsbot.webp'
import portfolioImg from '../images/portfolio.webp'
import metronomeImg from '../images/metronome.webp'
import challengeImg from "../images/challenge.webp"
import microserviceInitializrImg from "../images/microservice-initializr.webp"

export default function Projects() {
  const { t } = useTranslation()

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
          className="pb-3"
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
          className="pb-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={fadeInUp}>
            <Card projectName="Difficult"
              description={t('projects.difficult')}
              imgUrl={difficultImg}
              tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'Bootstrap', color: 'bg-violet-900', icon: 'icon-[mdi--bootstrap]' }, { name: 'Kotlin', color: 'bg-red-500', icon: 'icon-[cib--kotlin]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }, { name: 'MongoDB', color: 'bg-green-500', icon: 'icon-[lineicons--mongodb]' }, { name: 'Redis', color: 'bg-red-500', icon: 'icon-[devicon-plain--redis]' }]}
              repoUrl='https://github.com/Emart99/Difficult'
              buttonText={t('projects.codeButton')}
              buttonIcon="icon-[line-md--github]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="pb-3"
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
          className="pb-3"
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
          className="pb-3"
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
          className="pb-3"
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
          className="pb-3"
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