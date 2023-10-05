import Image from 'next/image';
import home from '@/styles/home.module.scss';

const ProfileInfo = () => {
    return (
        <div className={home.contProfile}>
            <div className={home.contProfilepic}>
                <Image width={150} height={150} src="/images/onlylogo.png" alt='profilepic'/>
            </div>
            <div className={home.contName}>
                <h1>Gonzalo Nicolás Pua</h1>
                <h2>Full Stack Developer</h2>
                <p>Desarrollando ideas y plasmándolas en la realidad a través de código y soluciones.</p>
                <div className={home.contButtons}>
                    <button>Descargar CV</button>
                    <button>Contacto</button>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;