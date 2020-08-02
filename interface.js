// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var c = new Clock(8, 89);
console.log(c);
console.log(c.setTime(Date.now.toString));
