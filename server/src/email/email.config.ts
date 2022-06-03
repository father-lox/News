import nodemailer from "nodemailer"
import {email_config} from "../config/config";

const emailConnection = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: email_config.login,
        pass: email_config.password
    }
})


export default emailConnection