
import { useTranslation } from 'react-i18next'
import Card from './Card'
import difficultImg from '../images/difficult.webp'
import rampAppImg from '../images/rampapp.webp'
import infDsbotImg from '../images/dsbot.webp'
import portfolioImg from '../images/portfolio.webp'
import metronomeImg from '../images/metronome.webp'

export default function Projects() {
  const { t } = useTranslation()
  

  return (
    <section id="projects" className="proyects md:pl-8 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <h2 className="pt-16 font-heading mb-24 font-bold tracking-tight text-center lg:text-start text-5xl ">{t('projects.title')}</h2>
        <div className="pb-16 gap-y-4 flex flex-col gap-y-16">
          <Card 
            style="intersect-once intersect:motion-preset-slide-up motion-delay-0 motion-duration-1000"
            projectName="RampApp"
            description={t('projects.rampApp')}
            imgUrl={rampAppImg}
            tecnologies={[{ name: 'React Native', color: 'bg-blue-500', icon: 'icon-[tabler--brand-react-native]' }, { name: 'Paper', color: 'bg-indigo-600', icon: 'icon-[mdi--paper]' }, { name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }]}
            repoUrl='https://github.com/Emart99/RampApp'
          />
          <Card projectName="Difficult"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-100 motion-duration-1000'
            description={t('projects.difficult')}
            imgUrl={difficultImg}
            tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'Bootstrap', color: 'bg-violet-900', icon: 'icon-[mdi--bootstrap]' }, { name: 'Kotlin', color: 'bg-red-500', icon: 'icon-[cib--kotlin]' }, { name: 'SpringBoot', color: 'bg-green-500', icon: 'icon-[simple-icons--springboot]' }, { name: 'MySQL', color: 'bg-blue-500', icon: 'icon-[lineicons--mysql]' }, { name: 'MongoDB', color: 'bg-green-500', icon: 'icon-[lineicons--mongodb]' }, { name: 'Redis', color: 'bg-red-500', icon: 'icon-[devicon-plain--redis]' }]}
            repoUrl='https://github.com/Emart99/Difficult'
          />
          <Card projectName="iNF-dsbot"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-200 motion-duration-1000'
            description={t('projects.inf-dsBot')}
            imgUrl={infDsbotImg}
            tecnologies={[{ name: 'Java', color: 'bg-red-500', icon: 'icon-[ri--java-fill] bg-white' }, { name: 'Discord4J', color: 'bg-indigo-700', icon: 'icon-[ic--baseline-discord]' }]}
            repoUrl='https://github.com/Emart99/iNF-dsbot'
          />
          <Card projectName="Portfolio"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-300 motion-duration-1000'
            description={t('projects.portfolio')}
            imgUrl={portfolioImg}
            tecnologies={[{ name: 'React', color: 'bg-blue-500', icon: 'icon-[mdi--react] bg-white' }, { name: 'TailwindCss', color: 'bg-blue-500', icon: 'icon-[mdi--tailwind]' }, { name: 'Flyonui', color: 'bg-violet-800', icon: 'icon-[arcticons--fly-delta]' }]}
            repoUrl='https://github.com/Emart99/Emart99'
          />
          <Card projectName="Multipurpose Metronome"
            style='intersect-once intersect:motion-preset-slide-up motion-delay-400 motion-duration-1000'
            description={t('projects.metronome')}
            imgUrl={metronomeImg}
            tecnologies={[{ name: 'Next.js', color: 'bg-black', icon: 'icon-[ri--nextjs-fill] bg-white' }]}
            repoUrl='https://github.com/Emart99/Metronome'
          />
        </div>
      </div>
    </section>
  )
}