import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  tasks:Task[] = [];
  pending:Task[] = [];
  inProcess:Task[] = [];
  completed:Task[] = [];
  show:string = 'full';
  sorted:Task[]= [];

  constructor(private tasksService:TasksService) { }

  ngOnInit() {
    this.showTasks();
    this.showCategorisedTasks();
  }

  showTasks() {
    this.tasksService.getTasks().subscribe(data => 
      {
      this.tasks = data;
    });
  }

  changeShow(event:any) {
    this.show = event.target.value;
  }

  showCategorisedTasks() {
    this.tasksService.getPendingTasks().subscribe(data => {
      this.pending = data;
      });
    this.tasksService.getInProcessTasks().subscribe(data => {
      this.inProcess = data;
      });
    this.tasksService.getCompletedTasks().subscribe(data => {
      this.completed = data;
      });
  }

  showSortedTasks() {
    this.tasksService.getSortedTasks().subscribe(data => this.sorted = data)
  }

  showbyName(name) {
    if (name=='')
    {
      alert("Enter something first");
      return;
    }
    this.tasksService.getTasksByName(name).subscribe(data => 
      {
        if(data.n==0){alert("No Task Found")}
        this.tasks = data;
      })
  }
  
}
