import AgedItem from "./aged-item"

export default class BackstagePassItem extends AgedItem {
  updateQuality() {
    this.increaseQuality()
    this.increaseQualityWhenSellInIsBelow(11)
    this.increaseQualityWhenSellInIsBelow(6)
  }

  sellInDidExceed0() {
    this.setQualityTo0()
  }

  increaseQualityWhenSellInIsBelow(amount: number) {
    if (this.sellIn < amount) {
      this.increaseQuality()
    }
  }

  setQualityTo0() {
    this.quality = 0
  }
}