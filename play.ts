class Octopus {
  readonly numberOfLegs: number = 8;
  constructor(readonly name: string) { }
  
  public salute() {
    return `Hello man I am ${this.name} and I am Awesome`
  }
}

let paul = new Octopus("Paully")
console.log(paul.name)
console.log(paul.salute());