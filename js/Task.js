"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(content, date, priority) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        this._checked = false;
    }
    Object.defineProperty(Task.prototype, "content", {
        get: function () {
            return this._content;
        },
        //-> SetterS
        set: function (val) {
            this._content = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (val) {
            this._date = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "priority", {
        get: function () {
            return this._priority;
        },
        set: function (val) {
            this._priority = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "checked", {
        set: function (val) {
            this._checked = val;
        },
        enumerable: true,
        configurable: true
    });
    Task.prototype.add = function (content, date, priority) {
        this._content = content;
        this._date = date;
        this._priority = priority;
        return "Task_" + (Math.random() * 99);
    };
    Task.prototype.update = function (content, date, priority, checked) {
        if (content === void 0) { content = ""; }
        if (priority === void 0) { priority = 0; }
        if (checked === void 0) { checked = false; }
        if (content != "") {
            this._content = content;
        }
        this._checked = checked;
        this._priority = priority;
        this._date = date;
    };
    Task.prototype.close = function () {
        this._checked = true;
    };
    Task.prototype.toString = function () {
        var priority = "Tiny";
        switch (this._priority) {
            case 0:
                priority = "Tiny";
                break;
            case 1:
                priority = "Small";
                break;
            case 2: priority = "Urgent";
        }
        return "\nCONTENU: " + this._content + "\nDATE: " + this._date.toString + "\n PRIORITE: " + priority + "\nETAT: " + ((this._checked) ? "Effectué" : "Non Effectué") + "\n";
    };
    return Task;
}());
exports.Task = Task;
