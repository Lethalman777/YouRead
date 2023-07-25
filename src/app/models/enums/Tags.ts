export enum Tags{
  fantasy = "fantastyka",
  historical = "historyczna"
}
export function tagList():Tags[]{
  let tags:Tags[]=[Tags.fantasy, Tags.historical]
  return tags
}
