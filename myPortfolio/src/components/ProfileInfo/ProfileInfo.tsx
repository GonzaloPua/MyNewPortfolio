import Image from 'next/image';
import home from '@/styles/home.module.scss';
import { AiOutlineCloudDownload } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from 'next/link';

const ProfileInfo = () => {
    return (
        <div className={home.contProfile}>
            <div className={home.contProfilepic}>
                <Image className={home.ImgProfilePic} width={250} height={250} src="/images/profilepic.jpg" alt='profilepic'/>
            </div>
            <div className={home.contName}>
                <h1>Gonzalo Nicolás Pua</h1>
                <h2>Full Stack Developer</h2>
                <p>Desarrollando ideas y plasmándolas en la realidad a través de código y soluciones.</p>
                <div className={home.contButtons}>
                    <Link className={home.contLinks} href="https://drive.google.com/u/1/uc?id=1932HOZ4Rd43imh-kfaQF7vI3DO_CA5lY&export=download" target="_blank" rel="noopener noreferrer">
                        <div className={home.contButton}>
                            <AiOutlineCloudDownload />
                            <h5>Descargar CV</h5>
                        </div>
                    </Link>
                    <Link className={home.contLinks} href="https://github.com/NicoPua" target="_blank" rel="noopener noreferrer">
                        <div className={home.contButton}>
                            <BsGithub />
                            <h5>GitHub</h5>
                        </div>
                    </Link>
                    <Link className={home.contLinks} href="https://www.linkedin.com/in/gonzalo-pua/" target="_blank" rel="noopener noreferrer">
                        <div className={home.contButton}>
                            <BsLinkedin />
                            <h5>LinkedIn</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;