function changeText(id){
    id.innerHTML="Olá, Hojê é SEXTA PORAAAAAAAAAAAAAAAAAAA";
}

function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

function mOver(obj){
    obj.innerHTML="Boa Noite!";
}

function mOut(obj){
    obj.innerHTML="Boa Tarde!";
}

function mDown(obj){
    obj.style.backgroundColor="#FFD466";
    obj.innerHTML="Boa Noite!";
}

function mUp(obj){
    obj.style.backgroundColor="#9F38FF";
    obj.innerHTML="Boa Tarde!";
}

var nome;
var email;
var num = 0;

function escrever (quadro){
    info = "Usuário número: "+(++num)+"\n";
    info+="Nome: "+nome+"\n";
    info+="Email: "+email+"\n\n";
    quadro.value+=info;
}

function mudaCor(cor){
    document.bgColor=cor;
}