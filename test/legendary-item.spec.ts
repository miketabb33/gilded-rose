import { expect, should } from 'chai';
import LegendaryItem from '../app/items/legendary-item';

describe('Legendary Item', ()=> {
  const whateverName = "Sulfuras, Hand of Ragnaros"

  it('item should not decrease in sell in or quality, sell in set to 0', () => {
    const sellIn = 0
    const quality = 80
    const subject = new LegendaryItem(whateverName, sellIn, quality)
    
    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn)
    expect(subject.quality).to.equal(quality)
  })

  it('item should not decrease in sell in or quality, sell in set to -1', () => {
    const sellIn = -1
    const quality = 80
    const subject = new LegendaryItem(whateverName, sellIn, quality)

    subject.updateItem()

    expect(subject.name).to.equal(whateverName)
    expect(subject.sellIn).to.equal(sellIn)
    expect(subject.quality).to.equal(quality)
  })
})