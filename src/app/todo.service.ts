import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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
  }

  addTask(key: string, value: {}) {
    this._storage?.set(key, value);
  }

  deleteTask(key: string) {
    this._storage?.remove(key);
  }

  updateTask(key: string, newValue: any) {
    this._storage?.set(key, newValue);
    this.getAllTasks();
  }

  getAllTasks() {
    let tasks: any[] = [];
    this._storage?.forEach((key, value, index) => {
      tasks.push({ 'key': key, 'value': value });
    });
    return tasks;
  }

}

