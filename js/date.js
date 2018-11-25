"use strict";
exports.__esModule = true;
var date = /** @class */ (function () {
    function date(year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
    }
    Object.defineProperty(date.prototype, "year", {
        //getters
        get: function () {
            return this._year;
        },
        //setters
        set: function (year) {
            this._year = year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (month) {
            this._month = this._month;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (day) {
            this._day = day;
        },
        enumerable: true,
        configurable: true
    });
    date.prototype.toString = function () {
        return this._year + "-" + this._month + "-" + this._day;
    };
    date.prototype.create = function (year, month, day) {
        this._year = year;
        this._month = month;
        this._day = day;
        return this.toString();
    };
    date.prototype.setDate = function (year, month, day) {
        return this.create(year, month, day);
    };
    date.prototype.yesterday = function () {
        var d = this._day, m = this._month, y = this._year;
        if (d - 1 == 0) {
            d = this.monthEnd(y, m - 1);
            if (this._month - 1 == 0) {
                y--;
                m = 12;
            }
            else {
                m--;
            }
        }
        else {
            d--;
        }
        return y + "-" + m + "-" + d;
    };
    date.prototype.tomorrow = function () {
        var d = this._day, m = this._month, y = this._year;
        if (d == this.monthEnd(y, m)) {
            d = 1;
            if (m + 1 > 12) {
                m = 1;
                y++;
            }
            else {
                m++;
            }
        }
        else {
            d++;
        }
        return y + "-" + m + "-" + d;
    };
    date.prototype.addDay = function (day) {
        if (day === void 0) { day = 1; }
        var d = this._day, m = this._month, y = this._year;
        while (d + day > this.monthEnd(y, m)) {
            day = (this.monthEnd(y, m) - day) - 1;
            d = 1;
            m++;
            if (m > 12) {
                y++;
                m = 1;
            }
        }
        d += day;
        return y + "-" + m + "-" + d;
    };
    date.prototype.subDay = function (day) {
        if (day === void 0) { day = 1; }
        var d = this._day, m = this._month, y = this._year;
        while (d - day < 1) {
            m--;
            if (m < 1) {
                y--;
                m = 12;
            }
            d = this.monthEnd(y, m);
            day = (this.monthEnd(y, m) - day);
        }
        d += day;
        return y + "-" + m + "-" + d;
    };
    date.prototype.addMonth = function (month) {
        if (month === void 0) { month = 1; }
        var y = Math.floor((this._month + month) / 12);
        var m = (this._month + month) % 12;
        y += this._year;
        return y + "-" + m + "-" + this._day;
    };
    date.prototype.subMonth = function (month) {
        if (month === void 0) { month = 1; }
        var d = this._day, m = this._month, y = this._year;
        var temp = 0;
        while (m - month < 1) {
            temp++;
            m = 12;
            month = Math.abs(m - month);
        }
        m -= month;
        y -= temp;
        return y + "-" + m + "-" + d;
    };
    date.prototype.addYear = function (year) {
        if (year === void 0) { year = 1; }
        var y = this._year + year;
        return y + "-" + this._month + "-" + this._day;
    };
    date.prototype.subYear = function (year) {
        if (year === void 0) { year = 1; }
        var y = this._year - year;
        return y + "-" + this._month + "-" + this._day;
    };
    //les methodes privees
    date.prototype.monthEnd = function (year, month) {
        //var result:number;
        if (month == 0)
            month = 12;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                return 30;
                break;
            case 2:
                return (year % 4 == 0) ? 29 : 28;
                break;
        }
    };
    return date;
}());
exports.date = date;
