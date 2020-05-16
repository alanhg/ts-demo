"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.greeting = '';
    Greeter.username = '';
    return Greeter;
}());
exports["default"] = Greeter;
function modifyProp(target, propertyKey) {
    target[propertyKey] = Math.random().toString();
}
function modifyProps(constructor) {
    {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.greeting = Math.random().toString();
                _this.username = Math.random().toString();
                return _this;
            }
            return class_1;
        }(constructor));
    }
}
console.log(Greeter.greeting);
console.log(Greeter.username);
