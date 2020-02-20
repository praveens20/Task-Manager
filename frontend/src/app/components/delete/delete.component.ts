import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  tasks:Task[] = [];

  constructor( private tasksService:TasksService ) { }

  ngOnInit() {
    this.tasksService.getTasks().subscribe(data => this.tasks = data )
  }

  deleteTask(id:string) {
    this.tasksService.deleteTask(id).subscribe(data => {
      for(var i=0; i<this.tasks.length; i++)
      {
        if(id==this.tasks[i]._id)
        {
          this.tasks.splice(i,1);
        }
      }
    })
  }

}
