import { expect } from 'chai';
import BackstagePassItem from '../app/items/backstage-pass-item';

describe('Backstage Pass Item', ()=> {
  const whateverName = "Backstage passes to a TAFKAL80ETC concert" 

  it('subject should decrease in sell in but increase in quality by 1 when sell in is above 10', () => {
    const sellIn = 15
    const quality = 20
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 1)
  })

  it('subject should decrease in sell in but increase in quality by 2 when sell in is equal to or below 10', () => {
    const sellIn = 10
    const quality = 20
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 2)
  })

  it('subject should decrease in sell in but increase in quality by 3 when sell in is equal to or below 5', () => {
    const sellIn = 5
    const quality = 20
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality + 3)
  })

  it('subject quality should not exceed 50', () => {
    const sellIn = 15
    const quality = 50
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(quality)
  })

  it('subject quality should not exceed 50 when sell is 10 days or less', () => {
    const sellIn = 10
    const quality = 49
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(50)
  })

  it('subject quality should not exceed 50 when sell is 5 days or less', () => {
    const sellIn = 5
    const quality = 49
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(50)
  })

  it('subject quality should go to 0 when sell in is 0 or below, set to 0', () => {
    const sellIn = 0
    const quality = 49
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(0)
  })

  it('subject quality should go to 0 when sell in is 0 or below, set to -1', () => {
    const sellIn = -1
    const quality = 49
    const subject = new BackstagePassItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn - 1)
    expect(subject.quality).to.equal(0)
  })
})