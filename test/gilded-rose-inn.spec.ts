import { expect } from 'chai';
import GildedRoseInn from '../app/gilded-rose-inn';
import AgedItem from '../app/items/aged-item';
import BackstagePassItem from '../app/items/backstage-pass-item';
import ConjuredItem from '../app/items/conjured-item';
import LegendaryItem from '../app/items/legendary-item';
import NormalItem from '../app/items/normal-item';

describe('Gilded Rose Inn', () => {
  var subject: GildedRoseInn

  const items = [
    new NormalItem("+5 Dexterity Vest", 10, 20), //
    new AgedItem("Aged Brie", 2, 0), //
    new NormalItem("Elixir of the Mongoose", 5, 7), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80), //
    new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
    new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new BackstagePassItem("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new ConjuredItem("Conjured Mana Cake", 3, 6)
  ];

  beforeEach(() => {
    subject = new GildedRoseInn(items)
  })

  it('should process and return the same amount of its it was given', ()=> {
    const results = subject.updateItems()
    expect(results.length).to.equal(items.length)
  })
})