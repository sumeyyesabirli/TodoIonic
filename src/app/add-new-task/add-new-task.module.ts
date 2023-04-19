import { CommonModule } from '@angular/common';
import { AddNewTaskPage } from './add-new-task.page'; // Import AddNewTaskPage component
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddNewTaskPageRoutingModule } from './add-new-task-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTaskPageRoutingModule
  ],
  declarations: []
})
export class AddNewTaskPageModule {

  exports: [AddNewTaskPage] | undefined
}
