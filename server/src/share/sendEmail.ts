import emailConnection from "../email/email.config";
import {email_config} from "../config/config";

export  function sendVerifyWriter (to: string) {
    const mailOptions = {
        from: email_config.login,
        to: to,
        subject: 'Регистрация автора на портале новостей',
        text: 'Hello People!, Welcome to Bacancy!',
    };

    emailConnection.sendMail({
            from: email_config.login,
            to: to,
            subject: 'Регистрация автора на портале новостей',
            html:
            `
                
            `
        },
        function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });
}