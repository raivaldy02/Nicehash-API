function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') { 
    if (elementExists(query)) { 
        window[funcName](function () { 
            click(query); 
        }, 
        timeInSec * 1000);
    }
}

function Captchasub(query, act = 'submit', timeInSec = 0.5) {
    if (elementExists(query)) { 
        var timer = setInterval(function () {
            if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {
                bp(query)[act](); clearInterval(timer); 
            } 
        }, timeInSec * 1000); 
    } 
}


function Captchaklik(query, act = 'click', timeInSec = 1) {
    if (elementExists(query)) {
        var timer = setInterval(function () { 
            if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) { 
                document.querySelector(query).click(); clearInterval(timer); 
            } 
        }, timeInSec * 1000); 
    } 
}
