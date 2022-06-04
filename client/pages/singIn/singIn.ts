import {showErrorNote, hideErrorNote, setOrUpdateErrorMessage} from '../../components/errorNote/errorNote.js';

function formValidation(form: HTMLFormElement, errorNode: HTMLDivElement): void {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userAuthorizationDate: { [key: string]: any } = Object.fromEntries(new FormData(form).entries());
        const errorNoteDom = document.querySelector('#sing-in-from [data-role=error-note]') as HTMLDivElement;
        let errorMessage: string = '';
    
        for (const key in userAuthorizationDate) {
            if (isEmpty(userAuthorizationDate[key] as string)) {
                errorMessage = 'для входа необходимо заполнить все поля формы';
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

formValidation(document.getElementById('sing-in-from') as HTMLFormElement, document.querySelector('#sing-in-from [data-role=error-note]') as HTMLDivElement)