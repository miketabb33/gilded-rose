import NormalItem from "./normal-item";

export default class AgedItem extends NormalItem {
  updateQuality() {
    this.increaseQuality()
  }

  sellInDidExceed0() {
    this.increaseQuality()
  }

  increaseQuality() {
    this.quality = this.mutator.increaseQualityUnlessAtMax(this.quality, this.qualityIncrementer)
  }
}