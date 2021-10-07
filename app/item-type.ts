import AgedItem from "./items/aged-item"
import BackstagePassItem from "./items/backstage-pass-item"
import NormalItem from "./items/normal-item"
import Item from "./items/item"
import LegendaryItem from "./items/legendary-item"

export default class ItemType {
   isNormal(item: Item): boolean {
      return item instanceof NormalItem
   }

   isLegendary(item: Item): boolean {
      return item instanceof LegendaryItem
   }

   isAged(item: Item): boolean {
      return item instanceof AgedItem
   }

   isBackstagePass(item: Item): boolean {
      return item instanceof BackstagePassItem
   }
}