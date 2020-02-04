import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'interfaces/task.interface';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

@Input()
public tasks: Task[];

@Output()
public remove: EventEmitter<string | number>

@Output()
public toggle: EventEmitter<string | number>

  constructor() {
    this.tasks = [];
    this.remove = new EventEmitter();
    this.toggle = new EventEmitter();
   }

  ngOnInit() {

    
  }

public removeTask(id: string | number): void {
  this.remove.emit(id);
}

public toggleDone(id: string | number): void {
  this.toggle.emit(id);
}

}
