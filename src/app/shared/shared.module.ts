import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from './task-item/task-item.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TaskItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [TaskItemComponent],
})
export class SharedModule { }
