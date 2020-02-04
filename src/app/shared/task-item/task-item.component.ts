import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'interfaces/task.interface';



@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input()
  public task: Task;

  @Output()
  private remove: EventEmitter<string | number>;

  constructor() { 
    this.remove = new EventEmitter();
  }

  ngOnInit() {
  }

  public toggleDone() {
    this.task.isDone = !this.task.isDone
  }

  public removeTask() {
    this.remove.emit(this.task.id)
  }

}
