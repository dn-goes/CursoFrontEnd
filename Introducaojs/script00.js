// declaracao de variaveis e constantes

let nome = "João";  //String
nome = "Jose";  // reatribuição de valor let
//let nome = "pedro";  //  erro- nao pode redeclarar

var idade = 25;  //NUmeric
idade = 26;  // reatribuicao de valor var
var idade = 30; // redeclarar - ok

const PI = 3.1415;  // Numeric
// PI= 3.1954;  // Erro nao pode reatribuir

let teste = true;  // Boolean
var x = null;  //null
var y; 

console.log("Nome: "+nome);
console.log("Idade: "+idade);
console.log("PI: "+PI);
console.log("Teste: "+teste);
console.log("Null: "+x);

// ==============================================
// Tipos de Operadores

// Operadores Aritmeticos (+, -, *. /, % )
var a = 10;
var b = 3;
console.log("Soma: "+(a+b));  //13
console.log("Subtracao: "+(a-b));  //7
console.log("Multiplicação: "+(a*b)); //30
console.log("Divisao: "+(a/b)); //3.33
console.log("Resto: "+(a%b))  //1

// Operadodores relacionais (>,>=,<,<=,==,===)
var a = 10;  // var NUmeric
var b = 20;  // var Numeric
var c = "10";  // var string

console.log("a>b: "+(a>b));  // copmparção maior
console.log("a==c: "+(a==c));  // igualdade simples
console.log("a===): "+(a===c));  // igualdade estrita

// operadores logicos (&& - E, || - OU, ! - NÂO)
var nota1 = 5;
var nota2 = 8;

console.log("aprovação: " + (nota1>7 && nota2)); //false
console.log("aprovação: " + (nota1>7 || nota2)); //true
console.log(!true); //false