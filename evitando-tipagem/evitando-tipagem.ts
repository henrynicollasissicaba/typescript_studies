//  TIPOS OPCIONAIS
const sendSpaceship = (spaceship: { pilot: string, copilot: string}) => {
    // algum código...
}

sendSpaceship({pilot: "Han Solo", copilot: "Chewbacca"})

// gera erro de tipagem
// sendSpaceship({pilot: "Han Solo"})

// resolve o problema da tipagem acima adicionando "?"
const sendSpaceship2 = (spaceship: { pilot: string, copilot?: string}) => {
    // algum código...
}

sendSpaceship2({pilot: "Han Solo", copilot: "Chewbacca"})
sendSpaceship2({pilot: "Han Solo"}) // sem erro de tipagem

// ------------------------------------------------------------------

// UTILIZANDO UNKNOWN
let input: unknown

input = "Hello World"
input = 10
input = true