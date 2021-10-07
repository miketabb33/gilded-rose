import { expect } from 'chai';
import AgedItem from '../app/items/aged-item';

describe('Aged Item', () => {
  const whateverName = "Aged Brie"

  it('item should decrease in sell in but increase in quality', () => {
    const sellIn = 2
    const quality = 0
    const subject = new AgedItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 1)
  })

  it('item quality should not exceed 50', () => {
    const sellIn = 2
    const quality = 50
    const subject = new AgedItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality)
  })

  it('item quality should increase by 2 when sell in is 0 or below, set to 0', () => {
    const sellIn = 0
    const quality = 20
    const subject = new AgedItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 2)
  })

  it('item quality should increase by 2 when sell in is 0 or below, set to -1', () => {
    const sellIn = -1
    const quality = 20
    const subject = new AgedItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 2)
  })
})