import { tecnologie } from "../interfaces/tecnologies"
import { motion } from "framer-motion";

export default function Card(props: {
    projectName: string,
    description: string,
    imgUrl: string,
    tecnologies: tecnologie[],
    repoUrl: string,
    buttonIcon: string,
    buttonText: string
    buttonText2?: string,
    buttonLink2?: string,
    buttonIcon2?: string
    repoUrl2?: string

}) {

    return (
        <article className={"card rounded-none bg-transparent shadow-none  md:card-side sm:max-w-full "}>
            <figure className="shadow-sm relative w-full h-full md:w-1/2 h-60 shrink-0 overflow-hidden ">
            <motion.div whileHover={{ scale: 1.05 }}>
                <img className="rounded-sm h-initial overflow-clip " src={props.imgUrl} alt="img" />
                </motion.div>
            </figure>
            <div className="card-body py-3 px-0 md:pb-6 md:px-6 flex flex-col">
                <div>
                    <h5 className="card-title text-bald text-4xl mb-2">{props.projectName}</h5>
                    <div className="group inline-flex flex-wrap items-center my-2 gap-2 ">
                        {props.tecnologies.map((tecnology, index) => {
                            return (
                                <div key={index} className={`rounded-sm p-1.5  flex gap-2 bg-primary text-white flex items-center`}>
                                    <span className={`${tecnology.icon} size-4 `}></span>
                                    <p className="text-md">{tecnology.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <p className="mt-2 text-xl">{props.description}</p>
                <div className="flex gap-2 mt-auto">
                    {props.buttonText2 ?
                        <div className="card-actions mt-4">
                            <a target="_blank" href={props.repoUrl2} className=" text-lg md:w-fit btn btn-outline btn-primary rounded-none"><span className={props.buttonIcon2}></span> {props.buttonText2}</a>
                        </div>
                        : <></>}
                    <div className="card-actions mt-4">
                        <a target="_blank" href={props.repoUrl} className=" text-lg md:w-fit btn btn-outline btn-primary rounded-none"><span className={props.buttonIcon}></span> {props.buttonText}</a>
                    </div>
                </div>

            </div>
        </article>

    )
}
