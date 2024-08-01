// Tuplas: arrays que permitem armazenar diferentes tipos de dados em uma mesma variável, 
// porém cada dado tem uma posição e um tipo de dado, não podendo ser alterado.
let tuples: [string, string, string]

tuples[0] = "Henry"
tuples[1] = "Simone"
tuples[2] = "Anderson"

// gera erro
// tuples[3] = "Issao"

let points: [number, boolean]
points = [10, false]

// gera erro
// points = [10, true, "Hello"]
