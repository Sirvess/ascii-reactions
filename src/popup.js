const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

document.querySelector(`#Hello`).onclick = (elem) => {
    writeToClipboard("Hello");
};   
document.querySelector(`#World`).onclick = (elem) => {
    writeToClipboard("World");
};   
