import Link from "next/link";
import navbar from '@/styles/navbar.module.scss';

const NavBarProjects = () => {
    return(
        <div className={navbar.menulinks}>
            <h3><Link href="/">Home</Link></h3>
        </div>
    )
}

export default NavBarProjects;