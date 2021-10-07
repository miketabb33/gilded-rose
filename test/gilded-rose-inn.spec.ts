import { expect } from 'chai';
import GildedRoseInn from '../app/gilded-rose-inn';
import AgedItem from '../app/items/aged-item';
import BackstagePassItem from '../app/items/backstage-pass-item';
import NormalItem from '../app/items/normal-item';
import LegendaryItem from '../app/items/legendary-item';

describe('Gilded Rose Inn', () => {
  const items = [
    // this conjured item does not work properly yet
    // new Item("Conjured Mana Cake", 3, 6)
  ]
  it('normal item quality and sell in should both decrease by 1 for when sell in is above 0', () => {
    const name = "Elixir of the Mongoose"
    const sellIn = 5
    const quality = 7
    const item = new NormalItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality - 1)
  })

  it('normal item quality should decrease by 2 and sell in should decrease by 1 for when sell in is equal or less then 0, set to 0', () => {
    const name = "Elixir of the Mongoose"
    const sellIn = 0
    const quality = 7
    const item = new NormalItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality - 2)
  })

  it('normal item quality should decrease by 2 and sell in should decrease by 1 for when sell in is equal or less then 0, set to -1', () => {
    const name = "Elixir of the Mongoose"
    const sellIn = -1
    const quality = 7
    const item = new NormalItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality - 2)
  })

  it('legendary item should not decrease in sell in or quality, sell in set to 0', () => {
    const name = "Sulfuras, Hand of Ragnaros"
    const sellIn = 0
    const quality = 80
    const item = new LegendaryItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn)
    expect(results[0].quality).to.equal(quality)
  })

  it('legendary item should not decrease in sell in or quality, sell in set to -1', () => {
    const name = "Sulfuras, Hand of Ragnaros"
    const sellIn = -1
    const quality = 80
    const item = new LegendaryItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn)
    expect(results[0].quality).to.equal(quality)
  })

  it('aged item should decrease in sell in but increase in quality', () => {
    const name = "Aged Brie"
    const sellIn = 2
    const quality = 0
    const item = new AgedItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 1)
  })

  it('aged item quality should not exceed 50', () => {
    const name = "Aged Brie"
    const sellIn = 2
    const quality = 50
    const item = new AgedItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality)
  })

  it('aged item quality should increase by 2 when sell in is 0 or below, set to 0', () => {
    const name = "Aged Brie"
    const sellIn = 0
    const quality = 20
    const item = new AgedItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 2)
  })

  it('aged item quality should increase by 2 when sell in is 0 or below, set to -1', () => {
    const name = "Aged Brie"
    const sellIn = -1
    const quality = 20
    const item = new AgedItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 2)
  })

  it('backstage pass item should decrease in sell in but increase in quality by 1 when sell in is above 10', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 15
    const quality = 20
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 1)
  })

  it('backstage pass item should decrease in sell in but increase in quality by 2 when sell in is equal to or below 10', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 10
    const quality = 20
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 2)
  })

  it('backstage pass item should decrease in sell in but increase in quality by 3 when sell in is equal to or below 5', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 5
    const quality = 20
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality + 3)
  })

  it('backstage pass item quality should not exceed 50', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 15
    const quality = 50
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(quality)
  })

  it('backstage pass item quality should not exceed 50 when sell is 10 days or less', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 10
    const quality = 49
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(50)
  })

  it('backstage pass item quality should not exceed 50 when sell is 5 days or less', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 5
    const quality = 49
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(50)
  })

  it('backstage pass item quality should go to 0 when sell in is 0 or below, set to 0', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = 0
    const quality = 49
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(0)
  })

  it('backstage pass item quality should go to 0 when sell in is 0 or below, set to -1', () => {
    const name = "Backstage passes to a TAFKAL80ETC concert"
    const sellIn = -1
    const quality = 49
    const item = new BackstagePassItem(name, sellIn, quality)
    const subject = new GildedRoseInn([item])

    const results = subject.upateItems()

    expect(results[0].name).to.equal(name)
    expect(results[0].sellIn).to.equal(sellIn - 1)
    expect(results[0].quality).to.equal(0)
  })
})