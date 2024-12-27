import { useTranslation } from "react-i18next";
import { tecnologie } from "../interfaces/tecnologies"

export default function Card(props: { projectName: string, description: string, imgUrl: string, tecnologies: tecnologie[], repoUrl: string, style:string }) {
    const { t } = useTranslation();
    return (
        <article className={"card rounded-none bg-transparent shadow-none  md:card-side sm:max-w-full " + props.style}>
            <figure className="shadow-xl relative w-full h-full md:w-2/5 h-60 shrink-0 overflow-hidden ">
                <img className="rounded-sm h-initial overflow-clip " src={props.imgUrl} alt="img" />
            </figure>
            <div className="card-body py-3 px-0 md:p-6 justify-between">
                <h5 className="card-title text-bald text-3xl">{props.projectName}</h5>
                <div className="group inline-flex flex-wrap items-center my-2 gap-2 ">
                    {props.tecnologies.map((tecnology, index) => {
                        return (
                            <div key={index} className={`rounded-sm p-1  flex gap-2 bg-primary text-white flex items-center`}>
                                <span className={`${tecnology.icon} size-4 `}></span>
                                <p>{tecnology.name}</p>
                            </div>
                        )
                    })}
                </div>
                <p className="mt-2">{props.description}</p>
                <div className="card-actions mt-4">
                    <a target="_blank" href={props.repoUrl} className="md:w-fit btn btn-outline btn-primary rounded-none"><span className="icon-[line-md--github]"></span> {t('projects.codeButton')}</a>
                </div>
            </div>
        </article>

    )
}
