import { expect } from 'chai';
import NormalItem from '../app/items/normal-item';

describe('Normal Item', ()=> {
  const whateverName = "Elixir of the Mongoose"

  it('quality and sell in should both decrease by 1 for when sell in is above 0', () => {
    const sellIn = 5
    const quality = 7
    const subject = new NormalItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 1)
  })

  it('quality should decrease by 2 and sell in should decrease by 1 for when sell in is equal or less then 0, set to 0', () => {
    const sellIn = 0
    const quality = 7
    const subject = new NormalItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 2)
  })

  it('quality should decrease by 2 and sell in should decrease by 1 for when sell in is equal or less then 0, set to -1', () => {
    const sellIn = -1
    const quality = 7
    const subject = new NormalItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality - 2)
  })

  it('quality should stay at 0 when it is at 0', () => {
    const sellIn = 5
    const quality = 0
    const subject = new NormalItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(0)
  })
})