const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

const buttonIds = ["Hello","World"];

const app = document.querySelector("#app");

buttonIds.forEach((id) => {
    const btn = document.createElement("button");
    btn.textContent = id;
    btn.onclick = (elem) => {
        writeToClipboard(id);
    };
    app.appendChild(btn);
});
