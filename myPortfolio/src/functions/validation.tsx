const validation = ({ firstname, lastname, email, title, message } : any) : UserData => {
    const onlyLetters = /^[a-zA-Z]+$/;
    const onlyEmails = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const errors = {
        firstname: "",
        lastname: "" ,
        email: "",
        title: "",
        message: "",
        flag: false
    }

    if(firstname.length === 0){
        errors.firstname = "- No debe estar vacío.";
        errors.flag = true;
    }else if(!onlyLetters.test(firstname)){
        errors.firstname = "- Debe contener sólo letras.";
        errors.flag = true;
    }else if(firstname.length < 2 || firstname.length > 20 ){
        errors.firstname = "- Debe contener entre 2 y 20 caracteres";
        errors.flag = true;
    }

    if(lastname.length === 0){
        errors.lastname = "- No debe estar vacío.";
        errors.flag = true;
    }else if(!onlyLetters.test(lastname)){
        errors.lastname = "- Debe contener sólo letras.";
        errors.flag = true;
    }else if(lastname.length < 2 || lastname.length > 20 ){
        errors.lastname = "- Debe contener entre 2 y 20 caracteres";
        errors.flag = true;
    }

    if(email.length === 0){
        errors.email = "- No debe estar vacío.";
        errors.flag = true;
    }else if(!onlyEmails.test(email)){
        errors.email = "- Debe tener un formato de E-mail";
        errors.flag = true;
    }

    if(title.length === 0){
        errors.title = "- No debe estar vacío.";
        errors.flag = true;
    }

    if(message.length < 10 || message.length > 600){
        errors.message = "- Debe contener entre 10 & 600 caracteres.";
        errors.flag = true;
    }
    return errors;
}

interface UserData{
    firstname: string,
    lastname: string,
    email: string,
    title: string,
    message: string,
    flag: boolean
}

export default validation