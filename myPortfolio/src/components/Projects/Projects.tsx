"use client";
import Image from 'next/image';
import data from '@/projects/projects.json';
import home from '@/styles/home.module.scss';

const Projects = () => {
    const projects = data;

    const handleClick = () => {
        console.log(projects);
    }

    return (
        <div onClick={handleClick}>
            sadas
        </div>
    )
}

export default Projects;