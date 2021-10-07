import { expect } from 'chai';
import LegendaryItem from '../app/items/legendary-item';
import ItemType from '../app/item-type';
import CommonItem from '../app/items/common-item';
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

  it("is common should return true when item is common", ()=> {
    const commonItem = new CommonItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isCommonItem(commonItem)
    expect(result).to.true
  }) 

  it("is common should return false when item is not common", ()=> {
    const legendaryItem = new LegendaryItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isCommonItem(legendaryItem)
    expect(result).to.false
  }) 

  it("is legendary should return true when item is legendary", ()=> {
    const legendaryItem = new LegendaryItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isLegendary(legendaryItem)
    expect(result).to.true
  }) 

  it("is legendary should return false when item is not legendary", ()=> {
    const commonItem = new CommonItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isLegendary(commonItem)
    expect(result).to.false
  }) 

  it("is aged should return true when item is aged", ()=> {
    const agedItem = new AgedItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isAged(agedItem)
    expect(result).to.true
  }) 

  it("is aged should return false when item is not aged", ()=> {
    const commonItem = new CommonItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isAged(commonItem)
    expect(result).to.false
  }) 

  it("is backstage pass should return true when item is backstage pass", ()=> {
    const agedItem = new BackstagePassItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isBackstagePass(agedItem)
    expect(result).to.true
  }) 

  it("is backstage pass should return false when item is not backstage pass", ()=> {
    const commonItem = new CommonItem(whateverName, whateverSellIn, whateverQuality) 
    const result = subject.isBackstagePass(commonItem)
    expect(result).to.false
  }) 
})