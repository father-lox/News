export default function sendComment(): void {
    document.querySelectorAll('.news__comment-form').forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const commentStructure: any = Object.fromEntries(new FormData(form as HTMLFormElement).entries());
            commentStructure.idNews = form.getAttribute('data-id-news');
            commentStructure.email = 'const_email@example.com';

            fetch('http://localhost:2000/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(commentStructure)
            }).then(res => {
                if (res.status === 200) {
                    alert('вы успешно отправили комментарий');
                } else {
                    alert(`не удалось сохранить комментарий`);
                }
            }).catch(res => {
                alert('произошла ошибка отправки запроса');
            })
        })
    })
}