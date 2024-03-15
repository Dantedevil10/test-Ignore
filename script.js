// Primeira Questão
// 1) Observe o trecho de código abaixo:

// int INDICE = 13, SOMA = 0, K = 0;

// enquanto K < INDICE faça

// {

// K = K + 1;

// SOMA = SOMA + K;

// }

// imprimir(SOMA);

// Ao final do processamento, qual será o valor da variável SOMA?

let indice = 13;
let soma = 0;
let k = 0;

while(k < indice){
    k = k + 1
    soma = soma + k
}
console.log(soma)  // soma será igual a 91


// 2) Dado a sequência de Fibonacci,
//  onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 
//  valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//  escreva um programa na linguagem que desejar onde, informado um número, 
//  ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número 
//  informado pertence ou não a sequência.

let numero = 13;

function estaNaSequenciaFibonacci(n) {
   
    let expressao1 = 5 * Math.pow(n, 2) + 4;
    let expressao2 = 5 * Math.pow(n, 2) - 4;
    
    let raiz1 = Math.sqrt(expressao1);
    let raiz2 = Math.sqrt(expressao2);

    let inteiro1 = Number.isInteger(raiz1);
    let inteiro2 = Number.isInteger(raiz2);
    
    return inteiro1 || inteiro2;
}


if (estaNaSequenciaFibonacci(numero)) {
    console.log(numero + " está na sequência de Fibonacci.");
} else {
    console.log(numero + " não está na sequência de Fibonacci.");
}

console.log(numero)

// IMPORTANTE:

// Esse número pode ser informado através de qualquer entrada de sua 
// preferência ou pode ser previamente definido no código;


// 3) Descubra a lógica e complete o próximo elemento:


// a) 1, 3, 5, 7, ___ = 9

// b) 2, 4, 8, 16, 32, 64, ____ = 128

// c) 0, 1, 4, 9, 16, 25, 36, ____ = 49

// d) 4, 16, 36, 64, ____       

// e) 1, 1, 2, 3, 5, 8, ____ = 13

// f) 2,10, 12, 16, 17, 18, 19, ____


// 4) Você está em uma sala com três interruptores, 
// cada um conectado a uma lâmpada em uma sala diferente. 
// Você não pode ver as lâmpadas da sala em que está, 
// mas pode ligar e desligar os interruptores quantas vezes quiser. 
// Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, 
// usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

//VOU SUPOR QUE SÂO DUAS IDAS A SALAS DIFERENTES

//primeiro deixe um interruptor ligado por um pequeno tempo depois deve se desligar
//acenda um outro interruptor e escolha uma sala se a luz estiver ligada uma resposta ja esta la 
//se estiver desligada pegue a lampada e veja se está quente se estiver ela controla o primeiro interruptor
// ligado ,se não estiver ela controla o unico interruptor nao usado


// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:

// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou 
// pode ser previamente definida no código;

// b) Evite usar funções prontas, como, por exemplo, reverse;


let teste = "test";
function Inverse(teste){
    let inv ="";
    for(let i = teste.length -1 ;i >= 0; i--){
        inv += teste[i]
    }
    return inv
}
let inv = Inverse(teste)

console.log(inv)