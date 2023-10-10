import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from '@/utils/nodemailer/emailOptions';
import { templateEmail } from "@/utils/nodemailer/template";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if(req.method === 'GET'){
        console.log('Solicitud GET recibida'); // Agrega esto para verificar si se llega a esta parte del código
        return res.status(200).json({success: "Probando Request"})
    }

    if(req.method === 'POST'){
        const { firstname, lastname, email, title, message } = req.body;
        console.log({ firstname, lastname, email, title, message });
        
        const options : object = mailOptions(email)  //CAMBIAR POR 'email' cuando esté listo.
        await transporter.sendMail({
            ...options,
            subject: `${firstname} ${lastname} | ${title}`,
            text: "Portfolio | Gonzalo Pua",
            html: templateEmail(firstname, lastname, title, message, email)
        });

        return res.status(200).json({success: "Email recibido."});
    }
  } catch (error : any) {
        return res.status(400).json({error: error.message})
  }
  
}