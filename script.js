const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

const messages = [
    "menganalisis hp.....",
    "...Samsung A15 .....",
    "No HP.+62-822-9589-3639....",
    "menghapus semua data di device hp anda...",
    "instagram : don...2.",
    "pemilik device A*******@gmail.com...",
    "Pasword : ********...",
    "Mereset semua data anda...",
    "Menghapus Semua Akun Dan Aplikasi di device anda....",
    "System succes",
    "Operation complete. Have a nice day :)"
];

let messageIndex = 0;

function typeText(text, callback) {
    let i = 0;
    const interval = setInterval(() => {
        inputElement.textContent += text[i];
        i++;
        if (i === text.length) {
            clearInterval(interval);
            setTimeout(callback, 500);
        }
    }, 50);
}

function printMessage(message) {
    const line = document.createElement('div');
    line.textContent = `> ${message}`;
    outputElement.appendChild(line);
    outputElement.scrollTop = outputElement.scrollHeight;
}

function hackerEffect() {
    if (messageIndex < messages.length) {
        printMessage(messages[messageIndex]);
        messageIndex++;
        setTimeout(hackerEffect, 1500);
    } else {
        typeText("Goodbye...", () => {});
    }
}

document.addEventListener('DOMContentLoaded', () => {
    hackerEffect();
});