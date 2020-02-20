import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TasksService } from '../../services/tasks.service';
import { ValidationsService } from 'src/app/services/validations.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  tasks:Task[] = [];
  name:string = '';
  category:string = '';
  priority:number;

  constructor(private tasksService:TasksService, private validationsService:ValidationsService ) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data =>  this.tasks = data);
  }

  addTask() {
    var newTask = {
      name: this.name.toLowerCase().trim(),
      category: this.category.toLowerCase(),
      priority: this.priority
    }

    if(this.validationsService.validTask(newTask))
      {
        this.tasksService.addTask(newTask).subscribe(data => 
          {
            for(var i=0; i<this.tasks.length; i++)
            {
              if(this.name.toLowerCase() == this.tasks[i].name)
              {
                alert("Task Name is already taken");
                return;
              }
              else if(this.priority == this.tasks[i].priority)
              {
                alert("Priority is already taken");
                return;
              }
             }
             this.tasks.push(data);
             alert("Task added successfully");
          })
      }
      
  }
}
