import Item from "./items/item"

export default class ItemMutator {
  incrementQualityUnlessAtMax(item: Item, amount: number) {
    item.quality = item.quality + amount
    if (item.quality >= 50) {
      item.quality = 50
    }
  }

  decrementQualityUnlessAtMin(item: Item, amount: number) {
    item.quality = item.quality - amount
    if (item.quality <= 0) {
      item.quality = 0
    }
  }

  decrementSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }

  setQualityTo0(item: Item) {
    item.quality = 0
  }
}