var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Log = function (t, name, desc) {
    console.log("Log: calling " + name + "()");
    return desc;
};
var DigitalWatch = /** @class */ (function () {
    function DigitalWatch() {
    }
    DigitalWatch.prototype.clock = function () {
        this.date = new Date;
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
    };
    __decorate([
        Log
    ], DigitalWatch.prototype, "clock");
    return DigitalWatch;
}());
var AnalogWatch = /** @class */ (function (_super) {
    __extends(AnalogWatch, _super);
    function AnalogWatch() {
        return _super.call(this) || this;
    }
    AnalogWatch.prototype.clock = function () {
        var digit = _super.prototype.clock.call(this);
        this.seconds = this.date.getSeconds();
        return digit + (" : " + this.seconds);
    };
    AnalogWatch.prototype.getHours = function () {
        return this.hours;
    };
    AnalogWatch.prototype.getMinutes = function () {
        return this.minutes;
    };
    AnalogWatch.prototype.getSeconds = function () {
        return this.seconds;
    };
    return AnalogWatch;
}(DigitalWatch));
window.onload = function () {
    var ATime = new AnalogWatch();
    var secondElement = document.getElementById("second");
    var minutesElement = document.getElementById("minutes");
    var hourElement = document.getElementById("hour");
    var time = document.getElementById('digital');
    setInterval(function () {
        ATime.clock();
        var m, h;
        m = ATime.getMinutes() < 10 ? "0" + ATime.getMinutes() : ATime.getMinutes();
        h = ATime.getHours() < 10 ? "0" + ATime.getHours() : ATime.getHours();
        secondElement.style.transform = "rotate(" + (ATime.getSeconds() * 6 - 90) + "deg)";
        minutesElement.style.transform = "rotate(" + (ATime.getMinutes() * 60 / 10 - 90) + "deg)";
        hourElement.style.transform = "rotate(" + (ATime.getHours() * 360 / 12 - 90) + "deg)";
        time.textContent = h + " : " + m;
    }, 1000);
};
