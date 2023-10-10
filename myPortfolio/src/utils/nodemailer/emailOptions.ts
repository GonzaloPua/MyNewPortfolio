const nodemailer = require("nodemailer");

const { GMAIL, GMAIL_PASS } = process.env;

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL,
        pass: GMAIL_PASS,
    }
})

export const mailOptions = (email : string) =>{
    if(email){
        return {
            from: email,
            to: GMAIL
        }
    }else{
        return {
            from: email,
            to: GMAIL
        }
    }
}