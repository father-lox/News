const selectorBody: string = 'body';
const selectorButtonShowComments: string = '.news [data-role=news-comment-button]';
const domBody: HTMLBodyElement = document.querySelector(selectorBody) as HTMLBodyElement;

document.querySelectorAll(selectorButtonShowComments).forEach(button => {
    button.addEventListener('click', (event) : void => {
        const newsDiv: HTMLDivElement = (event.target as HTMLElement).closest('.news') as HTMLDivElement;
        const comments: HTMLDivElement = newsDiv.querySelector('.news [data-role=news-comments-section]') as HTMLDivElement;
    
        comments.classList.toggle('hidden')
    });
});
