function displayResult () {
    let codeHTML = document.getElementById('html').value;
    let codeCSS = document.getElementById('css').value;
    let codeJS = document.getElementById('javascript').value;
    let showResult = document.getElementById('result');
    showResult.contentDocument.body.innerHTML = `${codeHTML}<style>${codeCSS}</style>`
    showResult.contentWindow.eval(codeJS);
}