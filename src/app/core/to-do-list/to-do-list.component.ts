import { Component, OnInit } from '@angular/core';
import { Task } from 'interfaces/task.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  public tasks: Task[] = [
    {
      id: 1,
      title: 'Do something',
      isDone: false,
    },
    {
      id: 2,
      title: 'Do nothing',
      isDone: false,
    },
    {
      id: 3,
      title: 'Do something else',
      isDone: false,
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
