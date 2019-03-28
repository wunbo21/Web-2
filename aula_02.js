//Método de confirmação
confirm("Tem certeza que deseja que você quer vender a sua alma?");

//Operador ternário é representado pela expressão, variavel=condição?verdadeiro:falso
var i;

for(i = 0; i < 1; i++){
    var idade = prompt("Qual é a sua idade?");
    if(idade >= 18){
        alert("Você é maior de idade!");
    }
    else{
        alert("Você é menor de idade!");
    }
}

//Método Math - para executar os comandos dos operadores
//abs- para transformar o numero negativo em positivo
var valor=Math.abs(-25);
alert("O resultado é : \u00A0" + valor);
document.write("O resultado é \u00A0"+ valor);

//max - para mostra o maior valor
var valor=Math.max(12,36)
alert("O maior valor é \u00A0"+ valor);
document.write("<br>O maior valor é \u00A0"+ valor);

//min - para mostra o menor valor
var valor=Math.min(12,36)
alert("O menor valor é \u00A0"+ valor);
document.write("<br>O menor valor é \u00A0"+ valor);

//pow - potencia
var valor=Math.pow(2,2)
alert("A potencia de 2 elevado a 2 é igual a \u00A0"+ valor);
document.write("<br>A potencia de 2 elevado a 2 é igual a \u00A0"+ valor);

//round para arredondar matematicamente
var valor=Math.round(30.4);
alert("O valor arredondado é \u00A0"+ valor);
document.write("<br>O valor arredondado é \u00A0"+ valor);

//ceil - obrigatoriamente arredonda para cima
var valor=Math.ceil(30.1);
alert("O valor arredondado é \u00A0"+ valor);
document.write("<br>O valor arredondado é \u00A0"+ valor);

//floor - obrigatoriamente arredonda para baixo
var valor=Math.floor(30.9);
alert("O valor arredondado é \u00A0"+ valor);
document.write("<br>O valor arredondado é \u00A0"+ valor);

//random - para trabalhar com valores aleatórios
//Traz um numeros aleatorio entre 0 e 1
var valor=Math.random();
alert("O valor aleatorio é \u00A0"+ valor);
document.write("<br>O valor aleatorio é \u00A0"+ valor);

var valor=Math.random()*80;
alert("O valor aleatorio é \u00A0"+ valor);
document.write("<br>O valor aleatorio é \u00A0"+ valor);

