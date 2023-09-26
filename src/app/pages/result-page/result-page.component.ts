import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreEnum } from 'src/app/shared/enums/GenreEnum';
import { SearchDataTypeEnum, SortTypeEnum, TypeOfEnum } from 'src/app/shared/enums/SearchEnum';
import { getEmptyParam, getSearchParam, getSearchWorkpiece } from 'src/app/shared/functions/SearchFunction';
import { SearchParam, SearchWorkpiece } from 'src/app/shared/models/Search';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent {
  searchTerm?:string
  searchParam:SearchParam = getEmptyParam()
  searchWorkpiece:SearchWorkpiece = getSearchWorkpiece()
  workpieces:WorkpieceLabel[]=[]
  loggedUserProfileId:number=0

  constructor(private userService:UserService, private route: ActivatedRoute,
    private workpieceService:WorkpieceService, private tokenService:TokenService){}
  ngOnInit(): void {
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
        }
      })
    }

    this.route.queryParams.subscribe(params=>{
      this.searchWorkpiece = getSearchWorkpiece()
      const navigationState = {
        type: params['type'],
        genre: params['genre'],
        searchTerm: params['searchTerm']
      }

      this.getSearchPage(navigationState)
      this.search(this.searchWorkpiece)
    })
  }

  search(searchWorkpiece:SearchWorkpiece){
    console.log(this.searchTerm)
    console.log(this.searchParam)

    this.workpieceService.searchWorkpieces(searchWorkpiece).subscribe(data=>{
      this.workpieces=data
      console.log(this.workpieces)
    })
  }

  handleSortEvent(event:any) {
    this.searchWorkpiece.searchParam=event.searchParam
    console.log(event.searchParam)
    if(event.searchTerm){
      this.searchWorkpiece.searchTerm=event.searchTerm
      this.searchWorkpiece.sortTypeEnum=SortTypeEnum.SearchTitle
    }
    this.search(this.searchWorkpiece)
  }

  getSearchPage(navigationState:any){
    switch(navigationState.type){
      case '1':
        this.searchWorkpiece = getSearchWorkpiece(undefined, SortTypeEnum.Recomendation, undefined, this.loggedUserProfileId)
        break;
      case '2':
        this.searchWorkpiece = getSearchWorkpiece(undefined, SortTypeEnum.Trending)
        break;
      case '3':
        this.searchWorkpiece = getSearchWorkpiece(undefined, undefined, undefined, this.loggedUserProfileId, true)
        break;
      case '4':
        this.searchWorkpiece = getSearchWorkpiece()
        switch(navigationState.genre){
          case '0':
            this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.mixed, SearchDataTypeEnum.genreEnum)
            break;
          case '1':
             this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.historical, SearchDataTypeEnum.genreEnum)
             break;
          case '2':
            this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.fantasy, SearchDataTypeEnum.genreEnum)
            break;
          case '3':
            this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.scienceFiction, SearchDataTypeEnum.genreEnum)
            break;
          case '4':
            this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.customary, SearchDataTypeEnum.genreEnum)
            break;
          case '5':
            this.searchWorkpiece.searchParam=getSearchParam('Genre', GenreEnum.sensational, SearchDataTypeEnum.genreEnum)
            break;
          default:
            this.searchWorkpiece.searchParam=getEmptyParam()
        }
        break;
      case '5':
        this.searchWorkpiece=getSearchWorkpiece(getSearchParam(
          'ReadHistories', true, SearchDataTypeEnum.boolean, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
          true, 'Any', getSearchParam('UserProfileId', this.loggedUserProfileId, SearchDataTypeEnum.number, undefined, undefined, undefined, undefined, undefined,
          'v', TypeOfEnum.ReadHistory)
        ))
        break;
      case '6':
        this.searchWorkpiece=getSearchWorkpiece(undefined, SortTypeEnum.SearchTitle, navigationState.searchTerm)
        break;
      default:
        this.searchWorkpiece=getSearchWorkpiece()
        break;
    }
  }
}
