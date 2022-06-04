import {showErrorNote, hideErrorNote, setOrUpdateErrorMessage} from '../../components/errorNote/errorNote.js';

function formValidation(form: HTMLFormElement, errorNode: HTMLDivElement): void {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userAuthorizationDate: { [key: string]: any } = Object.fromEntries(new FormData(form).entries());
        const errorNoteDom = document.querySelector('#sing-up-from [data-role=error-note]') as HTMLDivElement;
        let errorMessage: string = '';
    
        for (const key in userAuthorizationDate) {
            if (isEmpty(userAuthorizationDate[key] as string)) {
                errorMessage = 'для входа необходимо заполнить все поля формы';
                break;
            }
            else if (key === 'password' && passwordIsCorrect(userAuthorizationDate[key])) {
                errorMessage += 'пароль слишком короткий;\n';
                break;
            }
            else if ((key === 'login' || key === 'nickname') && !loginIsCorrect(userAuthorizationDate[key])){
                errorMessage += 'Псевдоним и логин должны состоять из латинских букв, цифр и символов "-", "_", не короче 3 и не длиней 16 символов;\n';
                break;
            }
        }

        if (errorMessage.length) {
            setOrUpdateErrorMessage(errorNoteDom, errorMessage);
            showErrorNote(errorNoteDom);
        }
        else if (!errorMessage.length && errorNode.style.display !== 'none') {
            hideErrorNote(errorNoteDom);
        }
    });
}

function isEmpty(value: string): boolean {
    return value.length == 0;
}

function passwordIsCorrect(value: string): boolean {
    return value.length < 8;
}

function loginIsCorrect(value: string): boolean {
    const regex = /^[a-z0-9_-]{3,16}$/;
    return regex.test(value);
}

formValidation(document.getElementById('sing-up-from') as HTMLFormElement, document.querySelector('#sing-up-from [data-role=error-note]') as HTMLDivElement)