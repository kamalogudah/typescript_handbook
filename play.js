var Octopus = /** @class */ (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    Octopus.prototype.salute = function () {
        return "Hello man I am " + this.name + " and I am Awesome";
    };
    return Octopus;
}());
var paul = new Octopus("Paully");
console.log(paul.name);
console.log(paul.salute());
