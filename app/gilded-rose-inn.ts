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
            if(this.#itemType.isLegendary(item)) {
                
            } else {
                this.legacyCode(item)
            } 
        }
        return this.#items;
    }

    legacyCode(item: Item) {
        if (this.#itemType.isAged(item) || this.#itemType.isBackstagePass(item)) {
            this.incrementQualityUnlessAtMax(item, 1)
            this.handleBackstageQualityBonus(item) 
        } else {
            this.decrementQualityUnlessAtMin(item, 1)
        }

        this.decrementSellIn(item)

        if (this.itemExceededSellIn(item)) {
            if (this.#itemType.isAged(item)) {
                this.incrementQualityUnlessAtMax(item, 1)
            } else {
                if (this.#itemType.isBackstagePass(item)) {
                    this.setQualityTo0(item)
                } else {
                    this.decrementQualityUnlessAtMin(item, 1)
                }
            }
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