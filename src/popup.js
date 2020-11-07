const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

const buttonIds = ["Hello","World"];

buttonIds.forEach((id) => {
    document.querySelector(`#${id}`).onclick = (elem) => {
        writeToClipboard(id);
    };
});
