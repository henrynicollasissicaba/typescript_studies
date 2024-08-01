class Spaceship {
    // no TS, é necessário declarar os atributos da classe antes do construtor
    // encapsulamento de atriutos no TS são: private, public, protected
    private name: string;
    protected captain: string;
    protected speed: number;

    // protegido (protected) => somente as classes mae e subclasses podem acessar
    // privado (private) => somente a classe mae pode acessar
    // public (public) => qualquer lugar pode acessar

    //   para acessar o atributo privado name usando getter
    get getName() {
        // ...
        return this.name;
    }

    // alterar o atributo privado name usando setter
    set setName(name: string) {
        // ...
        this.name = name;
    }

    constructor(name: string, captain: string) {
        this.name = name;
        this.captain = captain;
        this.speed = 0;
    }

    public accelerate(rate: number, time: number) {
        this.speed = rate * time;
    }
}

class FighterShip extends Spaceship {
    weapons: number;

    constructor(name: string, captain: string, weapons: number) {
        super(name, captain);
        this.weapons = weapons;
    }

    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log("Pew!");
        }
    }

    erase() {
        this.captain = "";
    }
}

let ship = new Spaceship("USS Enterprise", "James T. Kirk");

ship.accelerate(50, 10);
ship.setName = "X-Wing";
