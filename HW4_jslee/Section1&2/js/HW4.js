

function crypto(){

let myPassword = document.getElementById("ui").value;

if (myPassword === "" || myPassword == null || myPassword.length == 0){
    alert("It is blank user input field.");
    alert("try Again");
    DocumentFragment.getElementById("ui").focus();
}
else{

var message = document.getElementById("ui").value;
var secret = "cow";
var encrypt = CryptoJS.AES.encrypt(message, secret);
var encrypt2= CryptoJS.SHA1(message);
var encrypt3= CryptoJS.SHA512(message);
var encrypt4 = CryptoJS.HmacSHA256(message, secret);
 // var decrypt = CryptoJS.AES.decrypt(encrypt,secret);
document.getElementById("demo0").innerHTML =message;
document.getElementById("demo1").innerHTML = encrypt;
document.getElementById("demo2").innerHTML = encrypt2;
document.getElementById("demo3").innerHTML = encrypt3;
document.getElementById("demo4").innerHTML = encrypt4;

}

}