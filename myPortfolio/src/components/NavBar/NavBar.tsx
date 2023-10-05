import Image from 'next/image';
import navbar from '@/styles/navbar.module.scss'

const NavBar = () => {
    return(
        <nav className={navbar.globalCont}>
            <div className={navbar.logo}>
                <Image width={75} height={50} src="/images/onlylogo.png" alt='logo'/>
            </div>

            <div className={navbar.menulinks}>
                <h3>Sobre mí</h3>
                <h3>Proyectos</h3>
                <h3>Tecnologías</h3>
                <h3>Contacto</h3>
            </div>
        </nav>
    )
}

export default NavBar;