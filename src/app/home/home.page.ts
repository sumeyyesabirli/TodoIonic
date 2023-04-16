import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule],
})
export class HomePage {

  todoList = [{
    itemName: 'coding',
    itemDuedate: '10-12-20',
    itemPriority: 'low',
    itemCategory: 'word'
  },
  {
    itemName: 'sleep',
    itemDuedate: '10-12-20',
    itemPriority: 'high',
    itemCategory: 'work'
  },
  {
    itemName: 'weed',
    itemDuedate: '10-12-20',
    itemPriority: 'middle',
    itemCategory: 'work'
  },
  {
    itemName: 'music',
    itemDuedate: '30-12',
    itemPriority: 'high',
    itemCategory: 'personal'
  },
]
  today:number = Date.now()

  constructor() {}
}
