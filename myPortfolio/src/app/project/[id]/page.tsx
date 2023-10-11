"use client";
import { useEffect } from "react"
import { useParams } from "next/navigation";
import idProject from "@/styles/idProject/idproject.module.scss";
import data from "@/projects//userData";
import Image from "next/image";
import SimpleSlider from "@/components/Carousel/Carousel";
import Link from "next/link";
import { TbNetwork } from "react-icons/tb";
import { BsGithub, BsYoutube } from "react-icons/bs";


const ProjectDetails = () => {
    const { projects } = data;
    const { id } : any = useParams();
    const actualProject : any = projects.filter((proj)=> id.toString() === proj.id);
    
    return(
        <div className={idProject.globalCont}>
            {actualProject.length === 0? <>
                <h2 onClick={()=> console.log(projects)}>Cargando...</h2>
            </>:<>
                <h1 onClick={()=> console.log(actualProject)}>{actualProject[0].name}</h1>
                <div className={idProject.contProject}>
                    <div className={idProject.contSlider}>
                        <SimpleSlider project={actualProject[0].images}/>
                        <div className={idProject.contAllLinks}>
                            <div className={idProject.contLinks}>
                                {actualProject[0].links.deploy?
                                    <Link className={idProject.contLink} href={actualProject[0].links.deploy} target="_blank" rel="noopener noreferrer">
                                        <TbNetwork />
                                        <h5>WebSite</h5>
                                    </Link>
                                :<></>}
                                {actualProject[0].links.github?
                                    <Link className={idProject.contLink} href={actualProject[0].links.github} target="_blank" rel="noopener noreferrer">
                                        <BsGithub />
                                        <h5>GitHub</h5>
                                    </Link>
                                :<></>}
                                {actualProject[0].links.youtube?
                                    <Link className={idProject.contLink} href={actualProject[0].links.youtube} target="_blank" rel="noopener noreferrer">
                                        <BsYoutube />
                                        <h5>Youtube</h5>
                                    </Link>
                                :<></>}
                            </div>
                        </div>
                    </div>

                    <div className={idProject.contInfo}>        
                        <h4>Duración: {actualProject[0].duration}</h4>
                        <h4>Participantes: {actualProject[0].participants}</h4>
                        <h4>Descripción:</h4>
                        <h5>{actualProject[0].description}</h5>
                        <h4>Tecnologías:</h4>
                        <div className={idProject.contTechs}>
                            {actualProject[0].technologies.map((tech : any,index: number)=>{
                                return(<>
                                    <div className={idProject.contTech} key={`${index}`}>
                                        <Image src={tech} width={50} height={50} alt="tech"/>
                                    </div>
                                </>)
                            })}
                        </div>
                    </div>
                </div>
            </>}          
        </div>
    )
}

export default ProjectDetails;