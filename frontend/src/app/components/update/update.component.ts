import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  name:string = '';
  category:string = '';
  priority:number;
  id:string;
  tasks:Task[] = [];
  task:Task;
  update:boolean = false;

  constructor( private tasksService: TasksService , private router:Router) { }

  ngOnInit() {
  
  }

  showSelectedTasks() {
    if(this.category.toLowerCase() == "pending")
    {
      this.tasksService.getPendingTasks().subscribe(data => this.tasks = data);
    }
    else if(this.category.toLowerCase() == "in process")
    {
      this.tasksService.getInProcessTasks().subscribe(data => this.tasks = data);
    }
    else if(this.category.toLowerCase() == "completed")
    {
      this.tasksService.getCompletedTasks().subscribe(data => this.tasks = data);
    }
  }

  onClickUpdate(task:Task) {
    this.update = true;
    this.id = task._id;
    this.name = task.name;
    this.category = task.category;
    this.priority = task.priority;
  }

  updateTask(task) {
    task={
      name: this.name.trim().toLowerCase(),
      category: this.category.toLowerCase(),
      priority: this.priority
    }
    this.tasksService.updateTask(this.id,task).subscribe(()=>
    {
       alert("Task Updated Successfully");
       this.showSelectedTasks();
       this.update = false;
    });
  }

}
