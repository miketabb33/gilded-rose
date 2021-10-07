import ItemMutator from "../item-mutator";
import Item from "./item";

export default class NormalItem extends Item {
  mutator = new ItemMutator
  sellInIncrementer = 1
  qualityIncrementer = 1

  updateItem() {
    this.decreaseSellIn()
    this.updateQuality()
    if (this.sellIn < 0) {
      this.sellInDidExceed0()
    }
  }
 
  updateQuality() {
    this.decreaseQuality()
  }

  sellInDidExceed0() {
    this.decreaseQuality()
  }

  decreaseSellIn() {
    this.sellIn = this.mutator.decreaseSellIn(this.sellIn, this.sellInIncrementer)
  }

  decreaseQuality() {
    this.quality = this.mutator.decreaseQualityUnlessAtMin(this.quality, this.qualityIncrementer)
  }
}