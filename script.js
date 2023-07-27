const empty=""
let allchar;


const pLength=document.getElementById("p-length")
const Uppercase=document.getElementById("p-uppercase")
const Lowercase=document.getElementById("p-lowercase")
const pNumber=document.getElementById("p-number")
const pSymbol=document.getElementById("p-symbol")
const submit=document.getElementById("submit")
const password=document.getElementById("password")

submit.addEventListener("click",()=>{
    allchar="";
    let initialPassword=empty;
    if (Uppercase.checked) {
        allchar+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        initialPassword+="ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random()*26));
    }
    if(Lowercase.checked) {
        allchar+="abcdefghijklmnopqrstuvwxyz";
        initialPassword+="abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*26));
    }
    if(pNumber.checked){
        allchar+=pNumber.checked?"0123456789":"";
        initialPassword+="0123456789".charAt(Math.floor(Math.random()*10));
    } 
    if(pSymbol.checked){
        allchar+=pSymbol.checked?"!@#$%^&*()+=_":"";
        initialPassword+="!@#$%^&*()+=_".charAt(Math.floor(Math.random()*13));
    }
    password.value=generatePassword(pLength.value,initialPassword)
})

function generatePassword(len,initialPassword){
    let pass=initialPassword;
    for (let i = initialPassword.length; i <len; i++) {
        pass+=allchar.charAt(Math.floor(Math.random()*(allchar.length-1)));
    }
    return pass;
}



const copy=document.getElementById("copy")
copy.addEventListener("click",()=>{
    if (password.value=="") {
        alert("please generate a password")
    }
    else{
        password.select()
        document.execCommand("copy")
        alert("password has been copied to clipboard")
    }
})

const slidevalue=document.querySelector("span");
const inputSlider=document.querySelector(".field input");
inputSlider.oninput = (()=>{
    let value = inputSlider.value;
    slidevalue.textContent = value;
    slidevalue.style.left = ((value*200)/60) + "%";
});