class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "atacou";
          break;
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const meuHeroi = new Hero("Herói", 30, "ninja");
  meuHeroi.atacar();