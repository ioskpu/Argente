import fs from "file-saver";

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

function saveAsFile(name, type, body) {
    var blob = new Blob([body], { type: type });
    fs.saveAs(blob, name);
}

export { copyToClipboard, saveAsFile };
