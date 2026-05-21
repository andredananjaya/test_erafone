export function selectDateMoreThanToday() {

    const today = new Date();

    const randomDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 1
    );

    const year = randomDate.getFullYear();

    const month = String(randomDate.getMonth() + 1).padStart(2, '0');

    const day = String(randomDate.getDate()).padStart(2, '0');

    return `${day}/${month}/${year}`;
}

export function generateRandomComment(length = 10) {

    const characters = 'abcdefghijklmnopqrstuvwxyz';

    let randomComment = '';

    for (let i = 0; i < length; i++) {

        randomComment += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );

    }

    return randomComment;
}