export type SubscriptionCreate = {
  userProfileId:number
  subscribedProfileId:number
  dateOfCraetion:Date
}

export type Subscription = {
  id:number
  userProfileId:number
  profileId:number
  dateOfCraetion:Date
}
