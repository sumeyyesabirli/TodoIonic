import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DbModel } from './models/db.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private _storage: Storage | null = null;


  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.getAllTasks();
  }

  addTask(key: string, value: {}) {
    this._storage?.set(key, value);
    this.getAllTasks();
  }

  deleteTask(key: string) {
    this._storage?.remove(key);
    this.getAllTasks();
  }

  updateTask(key: string, newValue: any) {
    this._storage?.set(key, newValue);
    this.getAllTasks();
  }

  getAllTasks(): DbModel[] {
    let items: any[] = [];
    /*this._storage?.forEach((key, value, index) => {
      tasks.push({ 'key': key, 'value': value });
    });
    return tasks; */
    //let items: DbModel[]=[];

    this.storage.forEach((value, key) => {
      items.push({ value, key });
      console.log('items', items)
    })

    return items;
  }

  addcategory(key: string, category: {}) {
    this._storage?.set(key, category);
  }
}

