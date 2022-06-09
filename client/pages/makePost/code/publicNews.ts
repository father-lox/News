export default function publicNews(data: object): void {
    fetch('http://localhost:7293/make-post-api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 200) {
            alert('новость опубликована');
        } else {
            alert(`не удалось опубликовать новость`);
        }
    }).catch(res => {
        alert('произошла ошибка отправки запроса');
    })
}