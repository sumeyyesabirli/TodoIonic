import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { DataModel } from '../models/data.model';


@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddNewTaskPage implements OnInit  {
  categories: string[] = [];
  categorySelectedCategory: any;
  //DBcategory:keyof,value


  newTaskObj:DataModel = new DataModel('','','','');
  itemName: any;
  itemDueDate: any;
  itemPriority: any;
  itemCategory: any;

  constructor(public modalCtlr: ModalController, public todoService: TodoService) { }

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
    //let uid = this.itemName + this.itemDueDate;
    let uid = uuidv4();
    if (uid) {
      await this.todoService.addTask(uid, this.newTaskObj);
    } else {
      alert("Boş gönderi kaydedilemedi");
    }

    this.dismis();
  }

  selectCategory(index: string | number) {
    this.categorySelectedCategory = this.categories[index as number];
    console.log(this.categorySelectedCategory);
  }

  new(){

  }

  async dismis() {
    await this.modalCtlr.dismiss(this.newTaskObj);
  }
}



