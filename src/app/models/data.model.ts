export class DataModel {
  itemName: string;
  itemDueDate: string;
  itemPriority: string;
  itemCategory: string;

  constructor(itemName: string,
    itemDueDate: string,
    itemPriority: string,
    itemCategory: string,) {
      this.itemName = itemName;
      this.itemDueDate = itemDueDate;
      this.itemPriority = itemPriority;
      this.itemCategory = itemCategory;
  }
}
