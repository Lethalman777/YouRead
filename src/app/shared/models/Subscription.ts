export type SubscriptionCreate = {
  userProfileId:number
  subscribedProfileId:number
  dateOfCraetion:Date
}

export type Subscription = {
  id:number
  userProfileId:number
  subscribedProfileId:number
  dateOfCraetion:Date
}

export type SubscriptionLabel = {
  id:number
  username:string
  image:string
  backgroundImage:string
  description:string
  subscribers:number
}
