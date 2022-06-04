const textAreas: NodeListOf<HTMLTextAreaElement> = document.querySelectorAll('.make-post__input');

textAreas.forEach(textArea => {
    textArea.addEventListener('input', () => {
        textArea.style.height = 'auto';
        textArea.style.height = textArea.scrollHeight + 'px';
    });
});

const from: HTMLFormElement = document.getElementById('make-form') as HTMLFormElement;
