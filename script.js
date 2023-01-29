const empty=""
const uCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lCase="abcdefghijklmnopqrstuvwxyz"
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
        pass+=initialPassword.charAt(Math.floor(Math.random()*initialPassword.length));   
    }
    return pass;
}


// copy to clipboard

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