import validation from "@/functions/validation";
import contact from "@/styles/contact/contact.module.scss"
import { useState } from "react";
import { BsSendCheck } from "react-icons/bs"
import { AiOutlineMessage, AiOutlineMail } from "react-icons/ai"
import { MdDriveFileRenameOutline } from "react-icons/md"
import { PiSubtitles } from "react-icons/pi"
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "" ,
        email: "",
        title: "",
        message: "",
        recaptcha: false,
        ready: false
    })

    const [errors, setErrors] = useState({
        firstname: "",
        lastname: "" ,
        email: "",
        title: "",
        message: "",
        flag: true
    })

    const handleChange = (event : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) =>{
        const prop : string = event.target.name;
        const value : string = event.target.value;
        setFormData({...formData, [prop]: value})
        setErrors(validation({...formData, [prop]: value}))
    }

    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);
        
        if(!errors.flag){
            await axios.post(`http://localhost:3000/api/sendEmail`,formData);
            setFormData({...formData, ready: true});
        }
    }

    return(
        <div id="contact" className={contact.globalCont}>
            <h1>Contacto</h1>
            {formData.ready?<>
                <div>
                    <div>
                        <h2>Mensaje enviado con éxito</h2>    
                    </div>
                    <div >
                        <BsSendCheck />
                        <button> Enviar otro mensaje</button>
                    </div>
                </div>
            </>:<>
                <form onSubmit={handleSubmit} className={contact.contForm}>
                    <div className={contact.contInputs}>
                        <div className={contact.contOneInput}>
                            <div className={contact.contLabel}>
                                <MdDriveFileRenameOutline />
                                <label>Nombre</label>
                            </div>
                            <input name="firstname" onChange={handleChange} value={formData.firstname} placeholder="Nombre"/>
                            {errors.firstname? 
                                <h5>{errors.firstname}</h5>
                            : <></>}
                        </div>
                        <div className={contact.contOneInput}>
                            <div className={contact.contLabel}>
                                <MdDriveFileRenameOutline />
                                <label>Apellido</label>
                            </div>
                            <input name="lastname" onChange={handleChange} value={formData.lastname} placeholder="Apellido"/>
                            {errors.lastname? 
                                <h5>{errors.lastname}</h5>
                            : <></>}
                        </div>
                    </div>
                    <div className={contact.contInputs}>
                        <div className={contact.contOneInput}>
                            <div className={contact.contLabel}>
                                <PiSubtitles />
                                <label>Asunto</label>
                            </div>
                            <input name="title" onChange={handleChange} value={formData.title} placeholder="Asunto"/>
                            {errors.title? 
                                <h5>{errors.title}</h5>
                            : <></>}
                        </div>
                        <div className={contact.contOneInput}>
                            <div className={contact.contLabel}>
                                <AiOutlineMail />
                                <label>E-mail</label>
                            </div>
                            <input name="email" onChange={handleChange} value={formData.email} placeholder="E-mail"/>
                            {errors.email? 
                                <h5>{errors.email}</h5>
                            : <></>}
                        </div>
                    </div>
                    
                    <div className={contact.contTextLabel}>
                        <div className={contact.contLabel}>
                            <AiOutlineMessage />
                            <label>Mensaje</label>
                        </div>
                    </div>
                    <div className={contact.contTextarea}>
                        <textarea onChange={handleChange} name="message" value={formData.message} placeholder="Mensaje a enviar" rows={5} required />                  
                    </div>
                    {errors.message? 
                        <h5>{errors.message}</h5>
                    : <></>}

                    {errors.flag? 
                        <div className={contact.contDisButton}>    
                            <button disabled>
                                <BsSendCheck />
                                Enviar
                            </button>                 
                        </div>
                    :
                        <div className={contact.contButton}>  
                            <button>
                                <BsSendCheck />   
                                Enviar
                            </button>                 
                        </div>
                    }
                </form>
            </>}
        </div>
    )
}

export default Contact;