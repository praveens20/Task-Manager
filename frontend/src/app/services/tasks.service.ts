import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor( private http:HttpClient ) { }

  getTasks() {
    return this.http.get("http://localhost:3000/tasks").pipe(
      map((response:any) => response))
  }

  getPendingTasks() {
    return this.http.get("http://localhost:3000/tasks/pending").pipe(
      map((response:any) => response))
  }

  getInProcessTasks() {
    return this.http.get("http://localhost:3000/tasks/inProcess").pipe(
      map((response:any) => response))
  }

  getCompletedTasks() {
    return this.http.get("http://localhost:3000/tasks/completed").pipe(
      map((response:any) => response))
  }

  getSortedTasks() {
    return this.http.get("http://localhost:3000/tasks/sorted").pipe(
      map((response:any) => response))
  }

  getTasksByName(name) {
    return this.http.get("http://localhost:3000/tasks/name/"+name).pipe(
      map((response:any) => response))
  }

  addTask(newTask){
    return this.http.post("http://localhost:3000/task", newTask).pipe(
      map((response: any) => response))
  }

  updateTask(id,task) {
    return this.http.put("http://localhost:3000/tasks/"+id, task)
  }

  deleteTask(id:string) {
    return this.http.delete("http://localhost:3000/tasks/"+id).pipe(
      map((response:any) => response))
  }
}
