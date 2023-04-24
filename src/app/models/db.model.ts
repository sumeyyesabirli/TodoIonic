import { DataModel } from "./data.model";

export class DbModel {
  key: string;
  value: DataModel;

  constructor(key: string, value: DataModel) {
    this.key = key;
    this.value = value
  }
}
