import Image from "next/image";
import data from "@/projects/userData"
import techss from "@/styles/technologies/techs.module.scss"

const Technologies = () => {
    const { technologies: {database , desing, techs, tools} } = data; 
    return(
        <div id="techs" className={techss.globalCont}>
            <h1>Tecnologías & Herramientas</h1>
            <h2>Tecnologías</h2>
            <div className={techss.contAllCards}>
                {techs.map((img : string, index: number)=>{
                    return (<>
                        <div className={techss.contCard} key={`${index}`}>
                            <Image width={100} height={100} src={img} alt="techs"/>
                        </div>
                    </>)
                })}
            </div>
            <h2>Diseño</h2>
            <div className={techss.contAllCards}>
                {desing.map((img : string, index: number)=> {
                    return (<>
                        <div className={techss.contCard} key={`${index}`}>
                            <Image width={100} height={100} src={img} alt="dbimgs"/>
                        </div>
                    </>)
                })}
            </div>
            <h2>Base de datos</h2>
            <div className={techss.contAllCards}>
                {database.map((img : string, index: number)=> {
                    return (<>
                        <div className={techss.contCard} key={`${index}`}>
                            <Image width={100} height={100} src={img} alt="dbimgs"/>
                        </div>
                    </>)
                })}
            </div>
            <h2>Herramientas</h2>
            <div className={techss.contAllCards}>
                {tools.map((img : string, index: number)=> {
                    return (<>
                        <div className={techss.contCard} key={`${index}`}>
                            <Image width={100} height={100} src={img} alt="dbimgs"/>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Technologies;