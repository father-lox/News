export default function sendComment(): void {
    const commentForm: HTMLFormElement = document.getElementById('send-comment-form') as HTMLFormElement;

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const field: HTMLDivElement = document.querySelector('#send-comment-form .field') as HTMLDivElement;
        const commentInput: HTMLInputElement = field.querySelector('.field__input') as HTMLInputElement;

        if (!commentIsCorrect(commentInput.value)) {
            const errorParagraph: HTMLParagraphElement = document.querySelector('#send-comment-form .error-note__text') as HTMLParagraphElement;
            errorParagraph.innerHTML = 'Поле ввода комментария не корректно';
            field.classList.toggle('field_error');
            return;
        }

        const idNewsCurrent: string = document.querySelector('.news')?.getAttribute('data-news-id') as string;
        const emailUser: string = 'example@email.com';

        fetch('http://localhost:2000/api/comments', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: commentInput.value,
                idNews: idNewsCurrent,
                email: emailUser
            })
        }).then(res => {
            if (res.status === 400) {
                alert('Комментарий отправлен');
            }
        }).catch(res => console.log(res));
    })
}

function commentIsCorrect(value: string): boolean {
    return value.length > 5;
}