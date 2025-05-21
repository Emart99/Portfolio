
import { useTranslation } from 'react-i18next'
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
  

  return (
    <section id="projects" className="proyects md:pl-8 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <h2 className="pt-16 font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl ">{t('projects.title')}</h2>
        <div className="pb-16 gap-y-4 flex flex-col gap-y-16">
          <Card 
            style="intersect-once intersect:motion-preset-slide-up motion-delay-[400ms] motion-duration-1000"
            projectName="RampApp"
            description={t('projects.rampApp')}
            imgUrl={rampAppImg}
            tecnologies={[{ name: 'React Native', color: 'bg-blue-500', icon: 'icon-[tabler--brand-react-native]' }, { name: 'Paper', color: 'bg-indigo-600', icon: 'icon-[mdi--paper]' }, { name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }]}
            repoUrl='https://github.com/Emart99/RampApp'
            buttonText={t('projects.codeButton')}
            buttonIcon="icon-[line-md--github]"
          />
          <Card projectName="Difficult"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[500ms] motion-duration-1000'
            description={t('projects.difficult')}
            imgUrl={difficultImg}
            tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'Bootstrap', color: 'bg-violet-900', icon: 'icon-[mdi--bootstrap]' }, { name: 'Kotlin', color: 'bg-red-500', icon: 'icon-[cib--kotlin]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }, { name: 'MongoDB', color: 'bg-green-500', icon: 'icon-[lineicons--mongodb]' }, { name: 'Redis', color: 'bg-red-500', icon: 'icon-[devicon-plain--redis]' }]}
            repoUrl='https://github.com/Emart99/Difficult'
            buttonText={t('projects.codeButton')}
            buttonIcon="icon-[line-md--github]"
          />
          <Card projectName="iNF-dsbot"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[600ms] motion-duration-1000'
            description={t('projects.inf-dsBot')}
            imgUrl={infDsbotImg}
            tecnologies={[{ name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill] bg-white' }, { name: 'Discord4J', color: 'bg-indigo-700', icon: 'icon-[ic--baseline-discord]' }]}
            repoUrl='https://github.com/Emart99/iNF-discordBot'
            buttonText={t('projects.codeButton')}
            buttonIcon="icon-[line-md--github]"
          />
          <Card projectName="Portfolio"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[700ms] motion-duration-1000'
            description={t('projects.portfolio')}
            imgUrl={portfolioImg}
            tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' }, { name: 'Flyonui', color: 'bg-violet-800', icon: 'icon-[arcticons--fly-delta]' },{ name: 'i18n', color: 'bg-blue-500', icon: 'icon-[simple-icons--i18next]' }]}
            repoUrl='https://ezequiel-martino-portfolio.netlify.app/'
            buttonText="Link"
            buttonIcon="icon-[line-md--link]"
            repoUrl2='https://github.com/Emart99/Portfolio'
            buttonText2={t('projects.codeButton')}
            buttonIcon2="icon-[line-md--github]"
            
          />
          <Card projectName="CoolMetronome"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[800ms] motion-duration-1000'
            description={t('projects.metronome')}
            imgUrl={metronomeImg}
            tecnologies={[{ name: 'React', color: 'bg-black', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' },]}
            repoUrl='https://coolmetronome.netlify.app/'
            buttonText="Link"
            buttonIcon="icon-[line-md--link]"
          />
          <Card projectName="Challenge-Frontend"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[800ms] motion-duration-1000'
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
          <Card projectName="Spring Microservice Initializr"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-[800ms] motion-duration-1000'
            description={t('projects.spring-microservice')}
            imgUrl={microserviceInitializrImg}
            tecnologies={[{ name: 'React', color: 'bg-black', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' },{ name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]'},]}
            repoUrl='https://spring-microservice-initializr.netlify.app/'
            buttonIcon="icon-[line-md--link]"
            buttonText="Link"
            buttonText2={t('projects.codeButton')}
            buttonIcon2="icon-[line-md--github]"
            repoUrl2="https://github.com/Emart99/microservice-initializr"
          />
        </div>
      </div>
    </section>
  )
}