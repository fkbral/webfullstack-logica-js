let idade = parseInt(prompt('Digite sua idade : '));

let possui_carteira = prompt('Possui carteira de motorista ? ');

if (idade >= 18 && (possui_carteira === 'Sim' || possui_carteira === 'sim')) {
  console.log('É maior de idade e está apto para dirigir.'); 
} 
else console.log('Não pode dirigir.'); 