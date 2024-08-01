// Interfaces em TypeScript são uma maneira poderosa de definir a estrutura de objetos. 
// Elas permitem que você declare quais propriedades e métodos um objeto deve ter, 
// garantindo que os objetos sigam uma estrutura específica.
interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: Planets[]
}

interface Planet extends CelestialBody {
    population: number
    createSatellite: (name: string) => void
}

let sun: Star

sun.name = "Sun"
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.6 * (10 ** 9)
sun.planets = []

// com classes 
// utiliza implements
class MilkyWayPlanet implements Planet {
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number){
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSatellite(name: string) {
        // ...
    }
}