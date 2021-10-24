//alert("script is working")
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputBox=document.querySelector("#output");

//outputBox.innerText="bhavika"
//console.log(outputBox)

function clickHandler() {
   
        outputBox.innerText= "xyxxyxyx" + txtInput.value

    };

    btnTranslate.addEventListener("click",clickHandler)

 