export default function authorisation(data: object): void {
    fetch('http://localhost:2000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 200) {
            alert('вы успешно авторезировались');
        } else {
            alert(`произошла ошибка - проверте логин и пароль`);
        }
    }).catch(res => {
        alert('произошла ошибка отправки запроса');
    })
}