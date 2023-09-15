import { GenreEnum } from "./models/enums/GenreEnum";
import { SearchDataTypeEnum, SearchPageEnum } from "./models/enums/SearchEnum";
import { getEmptyParam, getSearchParam } from "./models/functions/SearchFunction";

export const  navigation = [
  {
    text: 'Główna',
    path: '/home',
    icon: 'home',
    state: {
      type: SearchPageEnum.Main
    }
  },
  {
    text: 'Polecane',
    path: '/search',
    icon: 'favorites',
    state: {
      type: SearchPageEnum.Recomended
    }
  },
  {
    text: 'Na czasie',
    path: '/search',
    icon: 'globe',
    state: {
      type: SearchPageEnum.Trending
    }
  },
  {
    text: 'Subskrypcje',
    path: '/search',
    icon: 'bell',
    state: {
      type: SearchPageEnum.Subscription
    }
  },
  {
    text: 'Gatunki',
    icon: 'bookmark',
    state: {
      type: SearchPageEnum.Genre
    },
    items: [
      {
        text: 'Obyczajowe',
        path: '/search',
        state:{
          type: SearchPageEnum.Genre,
          genre: GenreEnum.customary
        }
      },
      {
        text: 'Historyczne',
        path: '/search',
        state:{
          type: SearchPageEnum.Genre,
          genre: GenreEnum.historical
        }
      },
      {
        text: 'Fantasy',
        path: '/search',
        state:{
          type: SearchPageEnum.Genre,
          genre: GenreEnum.fantasy
        }
      },
      {
        text: 'Sensacyjne',
        path: '/search',
        state:{
          type: SearchPageEnum.Genre,
          genre: GenreEnum.sensational
        }
      },
      {
        text: 'Science-Fiction',
        path: '/search',
        state:{
          type: SearchPageEnum.Genre,
          genre: GenreEnum.scienceFiction
        }
      }
    ]
  },
  {
    text: 'Historia Użytkownika',
    path: '/search',
    icon: 'header',
    state:{
      type:SearchPageEnum.History
    }
  }
];
