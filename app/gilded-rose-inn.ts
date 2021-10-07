import Item from "./items/item";
import ItemType from "./item-type";

export default class GildedRoseInn {
    #items: Array<Item>;
    #itemType = new ItemType
    
    constructor(items = [] as Array<Item>) {
        this.#items = items;
    }

    processEndOfDayAndGetUpdatedItems() {
        for (let i = 0; i < this.#items.length; i++) {
            const item = this.#items[i]
            if (!this.#itemType.isAged(item) && !this.#itemType.isBackstagePass(item)) {
                if (item.quality > 0) {
                    if (!this.#itemType.isLegendary(item)) {
                        item.quality = item.quality - 1
                    }
                }
            } else {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                    this.handleBackstageQualityBonus(item) 
                }
            }
            if (!this.#itemType.isLegendary(item)) {
                item.sellIn = item.sellIn - 1;
            }
            if (item.sellIn < 0) {
                if (!this.#itemType.isAged(item)) {
                    if (!this.#itemType.isBackstagePass(item)) {
                        if (item.quality > 0) {
                            if (!this.#itemType.isLegendary(item)) {
                                item.quality = item.quality - 1
                            }
                        }
                    } else {
                        item.quality = 0
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                    }
                }
            }
        }

        return this.#items;
    }

    handleBackstageQualityBonus(item: Item) {
        if (this.#itemType.isBackstagePass(item)) {
            if (item.sellIn < 11) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
            if (item.sellIn < 6) {
                if (item.quality < 50) {
                    item.quality = item.quality + 1
                }
            }
        }
   } 
}
