const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

const emojis = [
    "¯\\_(ツ)_/¯",
    "(づ｡◕‿‿◕｡)づ",
    "( ͡° ͜ʖ ͡°)"
];

const app = document.querySelector("#app");

emojis.forEach((emoji,i) => {
    const btn = document.createElement("button");
    btn.textContent = emoji;
    btn.onclick = (elem) => {
        writeToClipboard(emoji);
    };
    app.appendChild(btn);
});
