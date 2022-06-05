export default function registration(data: object): void {
    fetch('http://localhost:2000/api/auth/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    }).then(res => {
        if (res.status === 200) {
            alert('вы успешно зарегистрировались');
        }
    }).catch(res => {
        alert('произошла ошибка регистрации');
    })
}