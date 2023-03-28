const empty=""
const uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lCase="abcdefghijklmnopqrsstuvwxyz"
const number="0123456789"
const symbol="!@#$%^&*()+=_"


const pLength=document.getElementById("p-length")
const Uppercase=document.getElementById("p-uppercase")
const Lowercase=document.getElementById("p-lowercase")
const pNumber=document.getElementById("p-number")
const pSymbol=document.getElementById("p-symbol")
const submit=document.getElementById("submit")
const password=document.getElementById("password")


submit.addEventListener("click",()=>{
    let initialPassword=empty;
    (Uppercase.checked)?initialPassword+=uCase:"";
    (Lowercase.checked)?initialPassword+=lCase:"";
    (pNumber.checked)?initialPassword+=number:"";
    (pSymbol.checked)?initialPassword+=symbol:"";

    password.value=generatePassword(pLength.value,initialPassword)
})

function generatePassword(len,initialPassword){
    let pass="";
    for (let i = 0; i <len; i++) {
        if(initialPassword.length==26){      //only uCase
            pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
        }else if (initialPassword.length==53) { //uCase+lCase
            if (i==len-2) {
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
            
        }else if (initialPassword.length==63) { //uCase+lCase+number
            if (i==len-3) {
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                i+=3;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==39) { //uCase+symbols
            if (i==len-2) {
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==36) { //uCase+number
            if (i==len-2) {
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==66) { //uCase+lCase+symbols
            if (i==len-3) {
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                i+=3;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==49) { //uCase+number+symbols
            if (i==len-3) {
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                i+=3;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==76) { //uCase+lCase+number+symbols
            if (i==len-4) {
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                pass+=uCase.charAt(Math.floor(Math.random()*uCase.length));
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                pass+=number.charAt(Math.floor(Math.random()*lCase.length));
                i+=4;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==37) { //lCase+number
            if (i==len-2) {
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==50) { //lCase+number+symbols
            if (i==len-3) {
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                i+=3;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==40) { //lCase+symbols
            if (i==len-2) {
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                pass+=lCase.charAt(Math.floor(Math.random()*lCase.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }else if (initialPassword.length==27) { //only lCase
            pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
        }else if (initialPassword.length==10) { //only number
            pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
        }else if (initialPassword.length==13) { //only symbols
            pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
        }else if (initialPassword.length==23) { // number+symbols
            if (i==len-2) {
                pass+=number.charAt(Math.floor(Math.random()*number.length));
                pass+=symbol.charAt(Math.floor(Math.random()*symbol.length));
                i+=2;
            }else{
                pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));
            }
        }
        // pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));   
    }
    return pass;
}


// copy to clipboard
    let initialPassword=empty;
    (Uppercase.checked)?initialPassword+=uCase:"";
    (Lowercase.checked)?initialPassword+=lCase:"";
    (pNumber.checked)?initialPassword+=number:"";
    (pSymbol.checked)?initialPassword+=symbol:"";

    password.value=generatePassword(pLength.value,initialPassword)

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