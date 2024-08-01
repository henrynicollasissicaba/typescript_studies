// Enums: conjunto de constantes que pode atribuir um valor numerico a cada uma delas
// Enumerar valores
enum Planets {
    MERCURIO, // Mercúrio tem valor 0 e assim por diante
    VENUS,
    TERRA,
    MARTE,
    JUPITER,
    SATURNO,
    URANO,
    NETUNO
}
console.log(Planets.MERCURIO)
// Output => 0


// Pode-se "enumerar" strings 
enum Colors {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    AZULESCURO = "azul escuro",
    VIOLETA = "violeta"
}
console.log(Colors.VERMELHO)
// output => 'vermelho'


// Pode-se inicializar um valor numerico para cada um dos enums
enum Roles {
    ADMIN = 1,
    USER // USER tem valor 2
}
console.log(Roles.USER)
// output => 2