import Item from "./items/item";
import ItemType from "./item-type";
import NormalItem from "./items/normal-item";
import AgedItem from "./items/aged-item";
import BackstagePassItem from "./items/backstage-pass-item";

export default class GildedRoseInn {
  #items: Array<Item>;
  #itemType = new ItemType

  constructor(items = [] as Array<Item>) {
    this.#items = items;
  }

  processEndOfDayAndGetUpdatedItems() {
    for (let i = 0; i < this.#items.length; i++) {
      const item = this.#items[i]
      if (this.#itemType.isNormal(item)) {
        this.processNormalItem(item)
      } else if (this.#itemType.isAged(item)) {
        this.processAgedItem(item)
      } else if (this.#itemType.isBackstagePass(item)) {
        this.processBackstagePassItem(item)
      }
    }
    return this.#items;
  }

  processNormalItem(item: NormalItem) {
    this.decrementSellIn(item)
    this.decrementQualityUnlessAtMin(item, 1)
    if (this.itemExceededSellIn(item)) {
      this.decrementQualityUnlessAtMin(item, 1)
    }
  }

  processAgedItem(item: AgedItem) {
    this.decrementSellIn(item)
    this.incrementQualityUnlessAtMax(item, 1)
    if (this.itemExceededSellIn(item)) {
      this.incrementQualityUnlessAtMax(item, 1)
    }
  }

  processBackstagePassItem(item: BackstagePassItem) {
    this.decrementSellIn(item)
    this.incrementQualityUnlessAtMax(item, 1)
    this.handleBackstageQualityBonus(item)
    if (this.itemExceededSellIn(item)) {
      this.setQualityTo0(item)
    }
  }

  handleBackstageQualityBonus(item: Item) {
    if (this.#itemType.isBackstagePass(item)) {
      if (item.sellIn < 11) {
        this.incrementQualityUnlessAtMax(item, 1)
      }
      if (item.sellIn < 6) {
        this.incrementQualityUnlessAtMax(item, 1)
      }
    }
  }

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

  itemExceededSellIn(item: Item): boolean {
    return item.sellIn < 0
  }
}