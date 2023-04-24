import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  providers: [TodoService],
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  //todoList: { key: string, value: any }[] = [];
  todoList: any[] = [];

  today: number = Date.now();

  constructor(private readonly modalCtlr: ModalController, private readonly todoService:TodoService) {
    this.getAllTask()
  }

  async addNewItem() {
    const modal = await this.modalCtlr.create({
      component: AddNewTaskPage,
    })
    modal.onDidDismiss().then(newTask =>{
      this.getAllTask()
      console.warn('liste', this.todoList)
    })
    return await modal.present()
  }

   getAllTask(){
    this.todoList = this.todoService.getAllTasks()
    //console.log('data',data)
    //console.log(this.todoService.getAllTasks());
  }

  delete(key: string) {
    this.todoService.deleteTask(key)
    this.getAllTask()
  }

  async update(selectedTask: any){
    const modal = await this.modalCtlr.create({
      component: UpdateTaskComponent,
      componentProps: {task: selectedTask}
    })

    modal.onDidDismiss().then(()=>{
      this.getAllTask()
    })

    return await modal.present()
  }
}
