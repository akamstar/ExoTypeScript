import { date } from "./date";
import { Priority } from "./Priority";
import { Task } from "./Task";
import { Project } from "./Project";


var project:Project=new Project();

var time=new date(2018,11,25);
var priorite:Priority=2;

var task1:Task=new Task("Envoi de l'exo de typeScript sur GitHub",time,priorite);

//project.Add(task1);

project.all;