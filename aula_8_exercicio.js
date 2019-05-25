var valor_a; 
var valor_b; 
var valor_c;
var valor_d; 


function escrever(quadro){
    info = "Valor de A: "+(valor_a)+"\n";
    info+= "Valor de B: "+(valor_b)+"\n";
    info+= "Valor de C: "+(valor_c)+"\n";
    info+= "Valor de D: "+(valor_d)+"\n";
    info+= "A soma de "+(valor_a)+" + "+(valor_c)+" é igual a "+(parseInt(valor_a) + parseInt(valor_c))+"\n";
    info+= "A multiplicação de "+(valor_b)+" x "+(valor_d)+" é igual a "+(parseInt(valor_b) * parseInt(valor_d))+"\n";
    quadro.value+=info;
}