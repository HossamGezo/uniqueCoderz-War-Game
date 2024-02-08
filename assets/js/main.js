let narutoo;
let sasskii;

class UIElements {
  constructor(name) {
    this.progress = document.querySelector(`.${name}-progress`);
    this.attackBtn = document.querySelector(`.${name}-attack`);
    this.healthBtn = document.querySelector(`.${name}-health`);
    this.alive = document.querySelector(`.${name}-alive`);
  }
}

class Fighter {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.elements = new UIElements(this.name);
  // ! ---------- Events
    this.elements.attackBtn.addEventListener("click", () => {
      this.attack(this.name === "narutoo" ? sasskii : narutoo);
    });
    this.elements.healthBtn.addEventListener("click", this.makeHealth);
  }
  // ! ---------- Attack Function
  attack(opponent) {
    if (opponent.health > 0) {
      opponent.health -= this.strength;
      opponent.elements.progress.style.width = `${opponent.health}%`;
    } else {
      opponent.elements.attackBtn.remove();
      opponent.elements.healthBtn.remove();
      opponent.elements.alive.innerText = `${opponent.name} is died`;
    }
  }
  // ! ---------- Status Function
  status() {
    console.log(`Name     : ${this.name}`);
    console.log(`Strength : ${this.strength}`);
    console.log(`Health   : ${this.health}`);
  }
  // ! ---------- Health Function
  makeHealth = () => {
    this.health < 100 ? this.health += 5 : this.health;
    this.health > 100 ? this.health = 100 : this.health;
    this.elements.progress.style.width = `${this.health}%`;
  }
}

narutoo = new Fighter("narutoo", 10, 100);
sasskii = new Fighter("sasskii", 05, 100);