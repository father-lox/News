export function showErrorNote(errorNoteDom: HTMLDivElement): void {
    errorNoteDom.style.display = 'flex';
}

export function hideErrorNote(errorNoteDom: HTMLDivElement): void {
    errorNoteDom.style.display = 'none';
}

export function setOrUpdateErrorMessage(errorNoteDom: HTMLDivElement, errorMessage: string): void {
    const errorParagraph: HTMLParagraphElement = errorNoteDom.querySelector('[data-role=error-message]') as HTMLParagraphElement;
    errorParagraph.innerHTML = errorMessage;
}
