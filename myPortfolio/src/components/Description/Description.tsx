import Image from 'next/image';
import home from '@/styles/home.module.scss';

const Description = () => {
    return (
        <div className={home.contDescription}>
            <div className={home.contInfo}>
                <h1>Información Personal</h1>
                <br/>
                <h3>Desarrollador Full Stack  & Técnico Electrónico.</h3>
                <br/> 
                <p>
                    Con estudios finalizados como "Full Stack Developer", 
                    he obtenido experiencia mediante proyectos tanto individuales como grupales 
                    en el desarrollo Front-End y en el desarrollo Back-End. Como desarrollador, disfruto desafiando mis límites y 
                    explorando nuevas tecnologías para ofrecer soluciones efectivas.
                </p>
                <br/>
                <p>
                    En cuanto a experiencia laboral fuera del mundo IT, he realizado capacitaciones como soporte técnico 
                    y he obtenido experiencia en dicho rubro destinados a dispositivos electrónicos como notebooks, PC
                    {" ("}escritorio{")"}, equipamientos estéticos y médicos.
                </p>
            </div>
            <div className={home.contImgDescription}>
            <Image width={400} height={300} src="/images/desktop.jpg" alt='desktop' />
            </div>
      </div>
    )
}

export default Description;