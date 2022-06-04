import emailConnection from "../email/email.config";
import {email_config} from "../config/config";

export  function sendVerifyWriter (to: string, name: string, redirect: string) {
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
                <p>Добрый день, ${name}.</p>
                <p>Для того, чтобы закончить процесс становления автором, перейдите по: </p>
                <a href="//${redirect}">ссылке</a>
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