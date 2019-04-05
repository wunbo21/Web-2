/*
1.Construir um programa em JS que leia uma informação 
compreendida entre 1 e 12 e imprima o mês correspondente. 
Caso seja digitada uma informação inválida, imprimir uma 
mensagem esclarecedora.
*/

var mes = prompt("Digite o número do mês atual:");

if(mes == 1){
  document.write("O mês atual é Janeiro");
}
else if(mes == 2){
    document.write("O mês atual é Fevereiro");
}
else if(mes == 3){
    document.write("O mês atual é Março");
}
else if(mes == 4){
    document.write("O mês atual é Abril");
}
else if(mes == 5){
    document.write("O mês atual é Maio");
}
else if(mes == 6){
    document.write("O mês atual é Junho");
}
else if(mes == 7){
    document.write("O mês atual é Julho");
}
else if(mes == 8){
    document.write("O mês atual é Agosto");
}
else if(mes == 9){
    document.write("O mês atual é Setembro");
}
else if(mes == 10){
    document.write("O mês atual é Outubro");
}
else if(mes == 11){
    document.write("O mês atual é Novembro");
}
else if(mes == 12){
    document.write("O mês atual é Dezembro");
}

/*
2. Calcular a quantidade de dinheiro gasta por um fumante. 
Dados: o número de anos que ele fuma, o número de cigarros 
fumados por dia e o preço de uma carteira.
*/
var ano = parseInt(prompt("A quantos anos você fuma: "));
var cigarro = parseInt(prompt("Quantos cigarros você fuma por dia:"));
var preco = parseFloat(prompt("Quanto custa uma carteira de cigarro: "));
var total = ((ano * 365) * cigarro);
var carteira = Math.ceil(total / 20);
var dinheiro = carteira * preco;
document.write("<br>Você fuma\u00A0" + cigarro + "\u00A0cigarros por dia a\u00A0" + ano + "\u00A0anos, sendo que a carteira custa\u00A0" + preco + "\u00A0reais");
document.write("<br>No total você ja fumou\u00A0"+ total +"\u00A0cigarros");
document.write("<br>Isso da no total\u00A0"+ carteira + "\u00A0 carteira(s) de cigarro, com isso você já gastou\u00A0"+ dinheiro +"\u00A0 reais com cigarro");

/*
3. Sabendo que Amália tem x anos e Joaquim y anos, fazer um 
programa JS que verifique a idade dos 2 amigos e exiba o nome 
do mais velho na tela.
*/

var amalia = parseInt(prompt("Digite a idade de Amália: "));
var joaquim = parseInt(prompt("Digite a idade de Joaquim: "));
if(amalia > joaquim){
    document.write("<br>Amália é mais velha que Joaquim");
}
else{
    document.write("<br>Joaquim é mais velha que Amália");
}

/*
4. Faça uma página JS que sorteie um número aleatório entre 1 e 14 
e verifique se ele é múltiplo de 3 ou 5.
*/

var aleatorio = Math.random()*14;
var aleatorio = Math.ceil(aleatorio);
document.write("<br>O valor aleatorio é \u00A0"+ aleatorio);
if(aleatorio % 3 == 0){
    document.write("<br>É um multiplo de 3");
}
else{
    document.write("<br>Não é um multiplo de 3");
}
if(aleatorio % 5 == 0){
    document.write("<br>É um multiplo de 5");
}
else{
    document.write("<br>Não é um multiplo de 5");
}

/*
5. O triângulo é uma figura geométrica composta por três retas.
Ele pode ser classificado conforme sua proporcionalidade.
-Equilátero -Isósceles -Escaleno
Faça um prompt no qual o usuário informará três números que representam 
cada um dos lados de um triângulo e determine sua classificação de proporcionalidade.
*/

var lado1=prompt("de o tamanho do lado 1");
var lado2=prompt("do o tamanho do lado 2");
var lado3=prompt("de o tamanho do lado 3");

if(lado1==lado2&&lado2==lado3){
	alert("o triangulo é equilátero");
}
 else if(lado1==lado2 && lado2!=lado3){
	 alert("o triangulo é isósceles");
 }
 else if(lado3==lado2 && lado2!=lado1){
	 alert("o triangulo é isósceles");
 }
 else if(lado1==lado3 && lado3!=lado2){
	 alert("o triangulo é isósceles");
 }
 else{
	 alert("o triangulo é escaleno");
 }