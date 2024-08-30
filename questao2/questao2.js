let n = 10;
let tabela = [];

tabela[0] = 0;
tabela[1] = 1;

for (let q = 2; q <= n; q++) {
  tabela[q] = tabela[q - 1] + tabela[q - 2]; 
}

console.log(tabela);