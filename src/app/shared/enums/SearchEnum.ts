export enum SearchOperatorEnum {
  equal = 0, greaterThan = 1, lessThan = 2, greaterThanOrEqual = 3, lessThanOrEqual = 4, notEqual = 5
}

export enum SearchDataTypeEnum {
  number = 0, text = 1, date = 2, boolean = 3, genreEnum = 4, reactionTypeEnum = 5, languageEnum = 6
}

export enum TypeOfEnum{
  Workpiece = 0, UserProfile = 1, User = 2, Chapter = 3, CommentPost = 4, CommentWorkpiece = 5,
  Post = 6, PostImage = 7, ReactionComment = 8, ReactionPost = 9, ReactionWorkpiece = 10,
  ReadHistory = 11, Subscription = 12, WorkpieceTag = 13, Preference = 14
}

export enum SearchPageEnum{
  Main = 0, Recomended = 1, Trending = 2, Subscription = 3, Genre = 4, History = 5, Searcher = 6
}

export enum SortTypeEnum{
  Recomendation = 0, Trending = 1, SearchTitle = 2, None = 3
}
