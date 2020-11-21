export {
    isNumber,
    isBetween,
    loadJS
};

function isNumber(number) {
    if (isNaN(number) || typeof number != "number") {
        return false;
    } else {
        return true;
    }
}

function isBetween(number, bottom, top) {
    if (number > top || number < bottom || !isNumber(number) || 
        !isNumber(bottom) || !isNumber(top) ) {
        return false;
    } else {
        return true;
    }
}

function loadJS(path){
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.src = path;
    document.getElementsByTagName('head')[0].appendChild(newScript);
}
