export function randomPrice() {
    return Math.floor(Math.random() * 100) + 1;
}

export function date() {
    return new Date().toISOString().slice(0, 10);
}

export function futureDate() {
    let actualDate = new Date();
    actualDate.setDate(actualDate.getDate() + 2);
    let futureDate = actualDate.toISOString().slice(0, 10);
    return futureDate;
}