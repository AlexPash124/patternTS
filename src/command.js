var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figure = /** @class */ (function () {
    function Figure() {
    }
    return Figure;
}());
var Romb = /** @class */ (function (_super) {
    __extends(Romb, _super);
    function Romb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Romb.prototype.setlineOne = function (lineOne) {
        this.lineOne = lineOne;
    };
    Romb.prototype.setlineTwo = function (lineTwo) {
        this.lineTwo = lineTwo;
    };
    Romb.prototype.getLineOne = function () {
        return this.lineOne;
    };
    Romb.prototype.getLineTwo = function () {
        return this.lineTwo;
    };
    Romb.prototype.getSquare = function () {
        return this.lineOne * this.lineTwo;
    };
    Romb.prototype.getPerimetr = function () {
        return 2 * (this.lineOne + this.lineTwo);
    };
    return Romb;
}(Figure));
var FabricaFigure = /** @class */ (function () {
    function FabricaFigure() {
        this.typeFigure = {
            romb: "Romb"
        };
    }
    FabricaFigure.prototype.createGigure = function (typeFigure) {
        if (typeFigure === this.typeFigure.romb) {
            return new Romb();
        }
    };
    return FabricaFigure;
}());
var fabrica = new FabricaFigure();
var figure1 = fabrica.createGigure("Romb");
console.log(figure1 === null || figure1 === void 0 ? void 0 : figure1.getLineTwo());
