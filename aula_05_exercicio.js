/* Desafio
Criar um vetor com 20 elementos. Imprimir o maior e o menor valor, sem ordenar, o percentual de números pares e a média dos 
elementos do vetor */


var vetor = [5]
var i;

for(i = 0; i < 5; i++){
    //Para randomizar os valores
    vetor[i] = parseInt(prompt("Digite um numero: "));
    document.write("<br>"+ vetor[i]);
}

//Para achar o maior valor
var maior = 0;
for(i = 0; i < 5; i++){
    if(maior < vetor[i]){
        maior = vetor[i];
    }
}
document.write("<br>O maior valor é: "+ maior);

//Para achar o menor valor
var menor = 999;
for(i = 0; i < 5; i++){
    if(vetor[i] < menor){
        menor = vetor[i];
    }
}
document.write("<br>O menor valor é: "+ menor);

//Para achar a porcentagem de números pares
var cont = 0
for(i = 0; i < 5; i++){
    if(vetor[i] % 2 == 0){
        cont++;
    }
}
var porcentagem = (cont / 100) * 20;
document.write("<br>Existem: "+ cont +" numero pares");
document.write("<br>A porcentagem de numeros pare é: "+ porcentagem);

//Para achar a média dos números dentro do vetor
var media = 0;
for(i = 0; i < 5; i++){
    media = media + vetor[i];
}
var media_final = media / 5;
document.write("<br>A media dos vetores é igual a: "+ media_final);