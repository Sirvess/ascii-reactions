const buttonId = 'toCopy';

const writeToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard");
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};

document.querySelector(`#${buttonId}`).onclick = (elem) => {
    writeToClipboard("Hello");
};   
