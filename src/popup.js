const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        return "Copied";
    } catch (e) {
        return "Failed to copy";
    }
};

const emojis = [
    "¯\\_(ツ)_/¯",
    "(づ｡◕‿‿◕｡)づ",
    "( ͡° ͜ʖ ͡°)"
];

const app = document.querySelector("#app");

emojis.forEach((emoji) => {
    const btn = document.createElement("button");
    btn.textContent = emoji;
    btn.onclick = () => writeToClipboard(emoji).then(x => {
        btn.textContent = x;
        setTimeout(() => {
            btn.textContent = emoji;
        },500);
    });
    app.appendChild(btn);
});
