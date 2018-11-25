"use strict";
exports.__esModule = true;
var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.Add = function (task) {
        this.tasks.push(task);
        //console.log(Task.toString);
    };
    Project.prototype.getTask = function (position) {
        if (position <= this.tasks.length - 1) {
            return this.tasks[position];
        }
    };
    Project.prototype.deleteTask = function (position) {
        if (position <= this.tasks.length - 1) {
            delete this.tasks[position];
            return true;
        }
        else {
            return false;
        }
    };
    //Afficher toutes les task
    Project.prototype.all = function () {
        for (var i = 0; i < this.tasks.length - 1; i++) {
            console.log(this.tasks[i].toString);
        }
    };
    Project.prototype.complete = function () {
        for (var i = 0; i < this.tasks.length - 1; i++) {
            if (this.tasks[i].checked == true) {
                console.log(this.tasks[i].toString);
            }
        }
    };
    Project.prototype.uncomplete = function () {
        for (var i = 0; i < this.tasks.length - 1; i++) {
            if (this.tasks[i].checked == false) {
                console.log(this.tasks[i].toString);
            }
        }
    };
    return Project;
}());
exports.Project = Project;
