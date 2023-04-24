import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateTaskComponent } from './update-task.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePageRoutingModule } from '../home/home-routin.module';

const routes: Routes = [
  {
    path: '',
    component: UpdateTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule],
  exports: [RouterModule],
})


export class UpdateTaskRoutingModule {
  exports: [UpdateTaskComponent] | undefined
}



