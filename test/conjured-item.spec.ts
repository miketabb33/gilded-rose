import { expect } from 'chai';
import ConjuredItem from '../app/items/conjured-item';

describe('Conjured Item', ()=> {
  const whateverName = "Conjured Mana Cake"

  it('quality and sell in should both decrease by 2 for when sell in is above 0', () => {
    const sellIn = 5
    const quality = 7
    const subject = new ConjuredItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 2)
  })

  it('quality should decrease by 4 and sell in should decrease by 1 for when sell in is equal or less then 0, set to 0', () => {
    const sellIn = 0
    const quality = 7
    const subject = new ConjuredItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 4)
  })

  it('quality should decrease by 4 and sell in should decrease by 1 for when sell in is equal or less then 0, set to -1', () => {
    const sellIn = -1
    const quality = 7
    const subject = new ConjuredItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 4)
  })
})