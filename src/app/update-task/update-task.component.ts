import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

interface Task {
  key: any;
  itemName: string;
  itemDueDate: string;
  itemPriority: string;
  itemCategory: string;

}

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
})
export class UpdateTaskComponent implements OnInit {
  @Input()
  task!: Task;
  categories: string[] = [];
  categorySelectedCategory: any;

  newTaskObj = {};
  itemName: any;
  itemDueDate: any;
  itemPriority: any;
  itemCategory: any;

  constructor(public modalCtlr: ModalController, public todoServive: TodoService) { }

  ngOnInit() {
    this.categories.push('work');
    this.categories.push('personal');

    this.itemName = this.task.itemName;
    this.itemDueDate = this.task.itemDueDate;
    this.itemPriority = this.task.itemPriority;
    this.categorySelectedCategory = this.task.itemCategory;
  }

  selectCategory(index: string | number) {
    this.categorySelectedCategory = this.categories[index as number];
    console.log(this.categorySelectedCategory);
  }

  async dismis() {
    await this.modalCtlr.dismiss();
  }

  async update() {
    this.newTaskObj = ({ itemName: this.itemName, itemDueDate: this.itemDueDate, itemPriority: this.itemPriority, itemCategory: this.categorySelectedCategory });
    let uid = this.task.key;
    await this.todoServive.updateTask(uid, this.newTaskObj);
    this.dismis();
  }
}
