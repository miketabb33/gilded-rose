
export default class ItemMutator {
  #maxQuality = 50
  #minQuality = 0

  increaseQualityUnlessAtMax(currentQuality: number, amount: number): number {
    var newQuality = currentQuality + amount
    if (newQuality >= this.#maxQuality) {
      newQuality = this.#maxQuality 
    }
    return newQuality
  }

  decreaseQualityUnlessAtMin(currentQuality: number, amount: number): number {
    var newQuality = currentQuality - amount
    if (newQuality <= this.#minQuality) {
      newQuality = this.#minQuality
    }
    return newQuality
  }

  decreaseSellIn(currentSellIn: number, amount: number): number {
    var newSellIn = currentSellIn - amount
    return newSellIn
  }
}