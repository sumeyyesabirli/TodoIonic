import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UpdateTaskComponent } from './update-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateTaskComponentModule
  ],
  declarations: []
})
export class UpdateTaskComponentModule {
  exports: [UpdateTaskComponent] | undefined
}
