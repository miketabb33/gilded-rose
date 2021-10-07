import { expect } from 'chai';
import LegendaryItem from '../app/items/legendary-item';
import ItemType from '../app/item-type';
import NormalItem from '../app/items/normal-item';
import AgedItem from '../app/items/aged-item';
import BackstagePassItem from '../app/items/backstage-pass-item';

describe("Item Type", ()=> {
  var subject: ItemType
  const whateverName = "Sword of 1000 Soldiers"
  const whateverSellIn = 5
  const whateverQuality = 10

  beforeEach(()=> {
    subject = new ItemType
  })

  it("is normal should return true when item is normal", ()=> {
    const commonItem = new NormalItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isNormal(commonItem)
    expect(result).to.true
  }) 

  it("is normal should return false when item is not normal", ()=> {
    const legendaryItem = new LegendaryItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isNormal(legendaryItem)
    expect(result).to.false
  }) 

  it("is legendary should return true when item is legendary", ()=> {
    const legendaryItem = new LegendaryItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isLegendary(legendaryItem)
    expect(result).to.true
  }) 

  it("is legendary should return false when item is not legendary", ()=> {
    const commonItem = new NormalItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isLegendary(commonItem)
    expect(result).to.false
  }) 

  it("is aged should return true when item is aged", ()=> {
    const agedItem = new AgedItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isAged(agedItem)
    expect(result).to.true
  }) 

  it("is aged should return false when item is not aged", ()=> {
    const commonItem = new NormalItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isAged(commonItem)
    expect(result).to.false
  }) 

  it("is backstage pass should return true when item is backstage pass", ()=> {
    const agedItem = new BackstagePassItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isBackstagePass(agedItem)
    expect(result).to.true
  }) 

  it("is backstage pass should return false when item is not backstage pass", ()=> {
    const commonItem = new NormalItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isBackstagePass(commonItem)
    expect(result).to.false
  }) 
})