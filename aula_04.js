//Operador this - Vai trazer o título da página
alert(this.document.title);

//delete - Remove um elemento
usuario = {
  nome:"Lucas",
  email:"lucas.bernardes@soulasalle.com.br",
  endereço:"Rua dos Alfeneiros nº 4"
}
alert("O nome é\u00A0"+(usuario.nome));
  delete usuario.nome;
alert("O nome é\u00A0"+(usuario.nome));

//O operador in - Serve para verificar se a propriedade existe
alert("nome" in usuario);
alert("email" in usuario);

//Condição while - Enquanto for verdadeiro executa
var i = 0;
  while(i < 3){
    alert(i);
    i++;
  }

var texto = "";
var i = 0;
  while(i < 3){
    texto = texto + i;
    i++;
  }
alert(texto);

var texto_1 = "";
var i = 3;
  while(i >= 0){
    texto_1 = texto_1 + i;
    i--; 
  }
alert(texto_1);

//switch

var tecnologia = prompt("Entre com a linguagem");
  switch(tecnologia){
      case "JavaScript":
      case "C++":
      case "Python":
      case "Ruby":
    alert("Linguagem de Programação");
    break;
      case "MySql":
      case "Oracle":
      case "SQL Server":
      case "Php":
    alert("Banco de Dados");
    break;
    default:
    alert("Tecnologia desconhecida");
  }

//Estrutura de repetição for
var y = 0;
var nome_1 = "";
  for(y = 0; y <=10; y++){
    if(nome_1 == 9){
      nome_1 = nome_1 + y;
    }
    else{
      nome_1 = nome_1 + y + ",";
    }
  }
alert(nome_1);