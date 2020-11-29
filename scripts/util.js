export {
    isNumber,
    isBetween,
    loadJS
};

function isNumber(number) {
    return !(isNaN(number) || typeof number != "number");
}

function isBetween(number, bottom, top) {
    return !(number > top || number < bottom || !isNumber(number) || 
        !isNumber(bottom) || !isNumber(top) ) 
}

function loadJS(path){
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = path;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}
