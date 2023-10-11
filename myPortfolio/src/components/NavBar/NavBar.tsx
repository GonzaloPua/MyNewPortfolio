"use client";
import Image from 'next/image';
import navbar from '@/styles/navbar.module.scss';
import { Link } from 'react-scroll';
import { usePathname } from 'next/navigation';
import NavBarProjects from './NavBarProjects';

const NavBar = () => {
    const pathname = usePathname();
    const pathArray = pathname!.split('/')
    const flag : boolean = pathArray.includes('project');

    return(
        <nav onClick={()=> console.log(flag)} className={navbar.globalCont}>
            <div className={navbar.logo}>
                <Image width={200} height={60} src="/images/logoCV2.png" alt='logo'/>
            </div>

            {flag?
                <NavBarProjects />
            :
                <div className={navbar.menulinks}>
                    <h3><Link to="description" smooth={true} duration={500}>Sobre mí</Link></h3>
                    <h3><Link to="projects" smooth={true} duration={500}>Proyectos</Link></h3>
                    <h3><Link to="techs" smooth={true} duration={500}>Tecnologías</Link></h3>
                    <h3><Link to="contact" smooth={true} duration={500}>Contacto</Link></h3>
                </div>
            }
        </nav>
    )
}

export default NavBar;