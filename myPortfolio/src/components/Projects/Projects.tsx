import Image from 'next/image';
import data from "@/projects//userData";
import scssProjects from '@/styles/projects/projects.module.scss';
import Link from 'next/link';
import { TbNetwork } from "react-icons/tb";
import { BsGithub, BsYoutube } from "react-icons/bs";

const Projects = () => {
    const { projects } = data;
    return (
        <div id="projects" className={scssProjects.globalCont}>
            <h1>Proyectos</h1>
            <div className={scssProjects.contAllCards}>
                {projects.map((project, index : number)=>{
                    return (<>
                        <Link href={`/project/${project.id}`}>
                        <div key={`${index}`} className={scssProjects.contCard}>
                            <div className={scssProjects.contImg}>
                                <Image className={scssProjects.projectImg} width={1280} height={720} src={project.images[0]} alt='photo'/>
                            </div>
                            <div className={scssProjects.contInfoCard}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className={scssProjects.contTechs}>
                                    {project.technologies.slice(0,5).map((tech, index : number)=>{
                                        return(
                                            <Image key={index} className={scssProjects.imgsTech} width={35} height={30} src={tech} alt='icon'/>
                                        )
                                    })}
                                </div>
                                <div className={scssProjects.contButtons}>
                                    {project.links.deploy? 
                                        <Link className={scssProjects.contIcons} href={project.links.deploy} target="_blank" rel="noopener noreferrer">
                                            <TbNetwork />
                                        </Link>
                                    : <></>
                                    }
                                    {project.links.github? 
                                        <Link className={scssProjects.contIcons} href={project.links.github} target="_blank" rel="noopener noreferrer">
                                            <BsGithub />
                                        </Link>
                                    : <></>
                                    }
                                    {project.links.youtube? 
                                        <Link className={scssProjects.contIcons} href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                                            <BsYoutube />
                                        </Link>
                                    : <></>
                                    }
                                </div>
                            </div>
                        </div>
                        </Link>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Projects;