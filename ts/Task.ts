import { date } from "./date";
import { Priority } from "./Priority";


export class Task{
    private _content:string;
    private _date:date;
    private _priority:Priority;
    private _checked:boolean;

    constructor(content:string,date:date,priority:Priority){
        this._content=content;
        this._date=date;
        this._priority=priority;
        this._checked=false;
    }

   get content(){
       return this._content;
    }
   get date(){
       return this._date;
    }
    get priority(){
        return this._priority;
    }

    //-> SetterS
    set content(val:string){
        this._content=val;
    }
    set priority(val:Priority){
        this._priority=val;
    }
    set date(val:date){
        this._date=val;
    }
    set checked(val:boolean){
        this._checked=val;
    }



    add(content:string,date:date,priority:Priority):string{
        this._content=content;
        this._date=date;
        this._priority=priority;

        return "Task_"+(Math.random()*99);
    }

    update(content="",date:date,priority:Priority=0,checked:boolean=false){
        if(content!=""){
            this._content=content;
        }
        this._checked=checked;
        this._priority=priority;
        this._date=date;

    }

    close(){
        this._checked=true;
    }

    toString(){
        let priority="Tiny"
        switch(this._priority){
            case 0: priority="Tiny";
            break;
            case 1: priority="Small";
            break;
            case 2: priority="Urgent";

        }
        return "\nCONTENU: "+this._content+"\nDATE: "+this._date.toString+"\n PRIORITE: "+priority+"\nETAT: "+((this._checked)?"Effectué":"Non Effectué")+"\n";
    }

}