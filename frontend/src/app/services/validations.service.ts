import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  validTask(task) {
    if(task.name.trim()=='') 
    {
      alert("Enter the task name");
      return false;
    }
    else if( task.category=='' ) 
    {
      alert("Enter the task category");
      return false;
    }
    else if( task.priority==null ) 
    {
      alert("Enter the task priority");
      return false;
    }
    else
      return true;
  }

}
