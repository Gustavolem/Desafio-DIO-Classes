class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque
        
        if (this.tipo === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "Mago") {
            ataque = "magia"
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

let guerreiro = new Heroi("Garrosh", "30", "Guerreiro")
let mago = new Heroi("Jaina", "50", "Mago")
let monje = new Heroi("Taran Zhu", "43", "Monge")
let ninja = new Heroi("Hanzo", "18", "Ninja")

guerreiro.atacar()
mago.atacar()
monje.atacar()
ninja.atacar()