import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTaskComponent } from './update-task.component';



const routes: Routes = [
  {
    path: '',
    component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTaskRoutingModule {}



