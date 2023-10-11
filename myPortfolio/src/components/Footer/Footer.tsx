import footer from "@/styles/footer.module.scss";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return(
        <footer className={footer.globalCont}>
            <Link className={footer.contLink} href="https://www.linkedin.com/in/gonzalo-pua/" target="_blank">
                <BsLinkedin />
                LinkedIn
            </Link>

            <Link className={footer.contLink} href="https://github.com/NicoPua" target="_blank">
                <BsGithub />
                GitHub
            </Link>

            <div>
                Full Stack Developer
            </div>
        </footer>
    )
}

export default Footer;