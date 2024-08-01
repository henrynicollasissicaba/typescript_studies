// utilizando "type" para criar tipos

type WorldPlanets = "Mercurio" | "Venus" | "Terra" | "Marte" | "Jupiter" | "Saturno" | "Urano" | "Netuno"
let planet: WorldPlanets
let homePlanet: WorldPlanets
// planet e homePlanet sao do tipo WorldPlanets


// utilizando em funções
const checkPlanet = (planet: WorldPlanets) => {
    if (planet === "Terra") {
        console.log("Estamos na Terra")
    }
}

// declarar tipos de função
type GreetingCallback = (name: string) => void

const greet = (callbackFnc: GreetingCallback) => {
    const name: string = "Henry"
    callbackFnc(name)
}