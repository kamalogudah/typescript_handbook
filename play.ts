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


let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);

