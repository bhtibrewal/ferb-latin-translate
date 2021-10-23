//alert("script is working")
var btnTranslate=document.querySelector("#btn-translate");
btnTranslate.addEventListener("click",clickHandler())
function clickHandler() {
    return function clickEventHandler() {
        console.log("clicked");
    };
}

