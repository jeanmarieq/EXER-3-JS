let nome = prompt("Qual é o seu nome");
let sobrenome = prompt("Qual é o seu sobrenome");
let idade = prompt("Qual é sua idade");

console.log ("Bem-vindo", nome, "Adoramos tê-lo aqui, abaixo os dados que forneço para nós");
console.log("");
console.log('Dados do usuario');
console.table(
    {
        'Nome': nome,
        'Sobrenome' : sobrenome,
        'Idade' : idade,

    }
)


