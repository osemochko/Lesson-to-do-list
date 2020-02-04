import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ToDoListComponent, AddTaskComponent, ListTasksComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    SharedModule,
  ],
  exports: [ToDoListComponent, AddTaskComponent, ListTasksComponent],
})
export class CoreModule { }
