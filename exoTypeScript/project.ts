//importation de la classe Task

import Task from './Task';

//Classe Projet

export class Projet{

    public _tasks : Task[];

//constructeur

    constructor(task:Task[]){
        this._tasks=task;
    }

//getter

    get tasks (): Task[] {
        return this._tasks;
    }
    
//setter

    set tasks (tasks:Task[]){
        this._tasks=tasks;
    }

    public addtask ( tasks:Task[] , Ntask:Task) : Task[] {
        tasks[tasks.length] = Ntask;
        return tasks;
    }

    public getTask ( tasks:Task[], position:number ) : Task{
        let TachPosit : Task = tasks[position];
        return TachPosit;
    }

    public deleteTask ( tasks:Task[], position:number ) : Task[] {
        tasks[position] = null;
        let permut : Task;

        for (let _i = position; _i < tasks.length; _i++) {
            permut=tasks[_i];
            tasks[_i]=tasks[_i+1];
            tasks[_i+1]=permut;
        }
        return tasks;
    }

    public all ( tasks:Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){
            console.log(tasks[_i]);
        }

    }

    public complete ( tasks:Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){

            if(tasks[_i]._checked = true){
                console.log(tasks[_i]);
            }

        }

    }

    public uncomplete ( tasks:Task[] ) {

        for(let _i = 0; _i < tasks.length; _i++){

            if(tasks[_i]._checked = false){
                console.log(tasks[_i]);
            }

        }

    }

   
    
}

