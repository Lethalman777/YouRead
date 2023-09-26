import { GenreEnum } from "../enums/GenreEnum";
import { WorkpieceLabel } from "../models/Workpiece";

export function getAllTopics() {
  return Object.values(GenreEnum)
}

export function getRandomTopics(amount:number) {
  const topics = getAllTopics()
  const selectedTopics=[]

  let i:number = 0

  while(i < amount){
    let random = Math.floor(Math.random() * (topics.length))
    selectedTopics.push(topics[random])
    topics.splice(random, 1)
    i++
  }

  return selectedTopics
}

export function getCarouselItems(items:WorkpieceLabel[], interval:number) : WorkpieceLabel[][] {
  let startIndex = 0
  const carouselItems:WorkpieceLabel[][]=[]

  while(startIndex < items.length){
    carouselItems.push(items.slice(startIndex, startIndex + interval))
    startIndex += interval
  }

  return carouselItems
}
