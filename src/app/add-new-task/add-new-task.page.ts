import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddNewTaskPage implements OnInit {
  categories: string[] = [];
  categorySelectedCategory: any;

  newTaskObj = {};
  itemName: any;
  itemDueDate: any;
  itemPriority: any;
  itemCategory: any;

  constructor(public modalCtlr: ModalController, public todoService: TodoService) {}

  ngOnInit() {
    this.categories.push('work');
    this.categories.push('personal');
  }

  async add() {
    this.newTaskObj = {
      itemName: this.itemName,
      itemDueDate: this.itemDueDate,
      itemPriority: this.itemPriority,
      itemCategory: this.categorySelectedCategory
    };
    console.log(this.newTaskObj);
    let uid = this.itemName + this.itemDueDate;

    if (uid) {
      await this.todoService.addTask(uid, this.newTaskObj);
    } else {
      console.log("Boş gönderi kaydedilemedi");
    }

    this.dismiss();
  }

  selectCategory(index: string | number) {
    this.categorySelectedCategory = this.categories[index as number];
    console.log(this.categorySelectedCategory);
  }

  async dismiss() {
    await this.modalCtlr.dismiss(this.newTaskObj);
  }
}
