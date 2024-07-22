const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up"
];

const terminal = document.getElementById('terminal');
const cursor = document.createElement('div');
cursor.classList.add('cursor');
terminal.appendChild(cursor);

function showMessage(index) {
    if (index >= messages.length) {
        cursor.style.display = 'none'; // Hide cursor after last message
        return;
    }

    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `${messages[index]}<span class="dots"></span>`;
    terminal.appendChild(messageElement);

    const dotsElement = messageElement.querySelector('.dots');
    let dotCount = 0;
    const dotInterval = setInterval(() => {
        dotCount = (dotCount + 1) % 4;
        dotsElement.textContent = '.'.repeat(dotCount);
        updateCursorPosition(messageElement);
    }, 500);

    const delay = Math.floor(Math.random() * 7000) + 1000; // Random delay between 1 to 7 seconds
    setTimeout(() => {
        clearInterval(dotInterval);
        showMessage(index + 1);
    }, delay);
}

function updateCursorPosition(messageElement) {
    const rect = messageElement.getBoundingClientRect();
    cursor.style.top = `${rect.top + window.scrollY}px`;
    cursor.style.left = `${rect.right + window.scrollX}px`;
}

showMessage(0);