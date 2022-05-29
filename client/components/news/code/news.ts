const selectorBody: string = 'body';
const selectorButtonShowComments: string = '.news [data-role=news-comment-button]';
const domBody: HTMLBodyElement = document.querySelector(selectorBody) as HTMLBodyElement;

domBody.addEventListener('click', (event) : void => {
    const button: HTMLButtonElement = (event.target as HTMLElement).closest(selectorButtonShowComments) as HTMLButtonElement;

    if (!button) {
        return;
    }

    const comments: HTMLDivElement = document.querySelector('.news [data-role=news-comments-section]') as HTMLDivElement;
    comments.classList.toggle('hidden')
});
