"use client";
import Image from 'next/image';
import data from '@/projects/projects.json';
import scssProjects from '@/styles/projects/projects.module.scss';

const Projects = () => {
    const { projects } = data;

    return (
        <div className={scssProjects.globalCont}>
            <h1>Proyectos</h1>
            <div className={scssProjects.contAllCards}>
                {projects.reverse().map((project, index : number)=>{
                    return (<>
                        <div key={`${index}`} className={scssProjects.contCard}>
                            <div className={scssProjects.contImg}>
                                <Image className={scssProjects.projectImg} width={1280} height={720} src={project.images[0]} alt='photo'/>
                            </div>
                            <div className={scssProjects.contInfoCard}>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <div className={scssProjects.contTechs}>
                                    {project.technologies.slice(0,5).map((tech)=>{
                                        return(
                                            <Image className={scssProjects.imgsTech} width={35} height={30} src={tech} alt='icon'/>
                                        )
                                    })}
                                </div>
                                <div className={scssProjects.contButtons}>
                                    <button>Sitio Web</button>
                                    <button>GitHub</button>
                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Projects;