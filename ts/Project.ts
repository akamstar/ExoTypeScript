import { Task } from "./Task";

export class Project{
    tasks:Task[];

    constructor(){

    }

    Add(task:Task){
        this.tasks.push(task);
        //console.log(Task.toString);
    }

    getTask(position:number):Task{
        if(position<=this.tasks.length-1){
            return this.tasks[position];
        }
    }

    deleteTask(position:number):boolean{
        if(position<=this.tasks.length-1){
            delete this.tasks[position];
            return true;
        }else{
            return false;
        }
    }
    //Afficher toutes les task
    all(){
        for(var i=0;i<this.tasks.length-1;i++){

            console.log(this.tasks[i].toString);
        }
    }

    complete(){
        for(var i=0;i<this.tasks.length-1;i++){
            if(this.tasks[i].checked==true){
                console.log(this.tasks[i].toString);
            }
        }
    }
    uncomplete(){
        for(var i=0;i<this.tasks.length-1;i++){
            if(this.tasks[i].checked==false){
                console.log(this.tasks[i].toString);
            }
        }
    }
}