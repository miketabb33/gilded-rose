import Item from "./items/item";
import NormalItem from "./items/normal-item";

export default class GildedRoseInn {
  #items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.#items = items;
  }

  upateItems() {
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i];
      (item as NormalItem).updateItem() 
    }
    return this.#items;
  }
}