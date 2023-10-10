export const templateEmail : any = (firstname: string, lastname: string, title: string, message: string, email: string) => {
    let template = `
        <!DOCTYPE html>
        <html>
            <h1>¡Te han enviado un mensaje desde tu Portfolio!</h1>
            <p>E-mail: ${email}</p>
            <p>Asunto: ${title}</p>
            <p>Mensaje: ${message}</p>
            <p>- ${firstname} ${lastname}</p>
        </html>
        `
    return template;
}

// <img src='https://res.cloudinary.com/djngnnxvp/image/upload/v1693859359/picsart_gallery/hsoh0smdihs5uiliisad.png' alt='PicsArt Logo' width='170' height='100'>