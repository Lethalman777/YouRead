import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum, getGenreValues } from 'src/app/shared/enums/GenreEnum';
import { SearchDataTypeEnum, SearchPageEnum, SortTypeEnum, TypeOfEnum } from 'src/app/shared/enums/SearchEnum';
import { getSearchParam, getSearchWorkpiece } from 'src/app/shared/functions/SearchFunction';
import { SelectEnum } from 'src/app/shared/models/Other';
import { SearchParam } from 'src/app/shared/models/Search';
import { WorkpieceLabel } from 'src/app/shared/models/Workpiece';
import { TokenService } from 'src/app/shared/services/token.service';
import { UserService } from 'src/app/shared/services/user.service';
import { WorkpieceService } from 'src/app/shared/services/workpiece.service';

@Component({
  selector: 'app-recomendation-box',
  templateUrl: './recomendation-box.component.html',
  styleUrls: ['./recomendation-box.component.css']
})
export class RecomendationBoxComponent {
  results:WorkpieceLabel[]=[]
  recomendationParams!:SearchParam
  recomendationPostParams!:SearchParam
  genres:SelectEnum<GenreEnum>[] = getGenreValues()
  recomendedWorkpieces:WorkpieceLabel[]=[]
  trendedWorkpieces:WorkpieceLabel[]=[]
  historyWorkpieces:WorkpieceLabel[]=[]
  loggedUserProfileId:number=0
  isLogged:boolean = false

  constructor(private router:Router, private workpieceService:WorkpieceService, public tokenService:TokenService, private userService:UserService){

    // if(tokenService.isLoggedIn()){
    //   workpieceService.getRecomendedWorkpieces(this.loggedUserProfileId).subscribe(data=>{
    //     this.recomendedWorkpieces=data
    //     const extra = this.recomendedWorkpieces.length%4
    //     this.recomendedWorkpieces = this.recomendedWorkpieces.slice(0, this.recomendedWorkpieces.length-1-extra)
    //   })
    // }

    // workpieceService.getTrendedWorkpieces().subscribe(data=>{
    //   this.trendedWorkpieces=data
    // })
    // if(tokenService.isLoggedIn()){
    //   workpieceService.getHistoryWorkpieces(this.loggedUserProfileId).subscribe(data=>{
    //     this.historyWorkpieces=data
    //   })
    // }

    this.getRecommended()
    this.getTrending()
    this.getHistory()

    this.recomendationParams = getSearchParam(undefined, undefined, undefined, undefined, undefined, undefined, false, [
      getSearchParam('Genre', GenreEnum.historical, SearchDataTypeEnum.genreEnum),
      getSearchParam('IsPublished', false, SearchDataTypeEnum.boolean)
    ])

    this.recomendationPostParams = getSearchParam('UserProfileId', 5002, SearchDataTypeEnum.number)
    //this.recomendationPostParams = getEmptyParam()
  }

  ngOnInit(): void {
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
        }
      })
    }
  }

  getRecommended(){
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
          const searchWorkpiece = getSearchWorkpiece(undefined, SortTypeEnum.Recomendation, undefined, res.userId)
          this.workpieceService.searchWorkpieces(searchWorkpiece).subscribe(data=>{
            this.recomendedWorkpieces=data
            console.log(this.recomendedWorkpieces)
          })
        }
      })
    }
  }

  getTrending(){
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
        next:(res)=>{
          this.loggedUserProfileId = res.userId
          const searchWorkpiece = getSearchWorkpiece(undefined, SortTypeEnum.Trending, undefined, res.userId)
          this.workpieceService.searchWorkpieces(searchWorkpiece).subscribe(data=>{
            this.trendedWorkpieces=data
            console.log(this.trendedWorkpieces)
          })
        }
      })
    }

  }

  getHistory(){
    if(this.tokenService.isLoggedIn()){
      this.userService.loggedUserId().subscribe({
      next:(res)=>{
        this.loggedUserProfileId = res.userId
        const searchWorkpiece=getSearchWorkpiece(getSearchParam(
          'ReadHistories', true, SearchDataTypeEnum.boolean, undefined, undefined, undefined, undefined, undefined, undefined, undefined,
          true, 'Any', getSearchParam('UserProfileId', this.loggedUserProfileId, SearchDataTypeEnum.number, undefined, undefined, undefined, undefined, undefined,
          'v', TypeOfEnum.ReadHistory)
        ), undefined, undefined, res.userId)
        this.workpieceService.searchWorkpieces(searchWorkpiece).subscribe(data=>{
          this.historyWorkpieces=data
          console.log(this.historyWorkpieces)
        })
      }
    })
    }
  }

  navigateToRecomended(){
    this.router.navigate(['/search'], {
      queryParams: {
        type: SearchPageEnum.Recomended
      }
    });
  }

  navigateToTrending(){
    this.router.navigate(['/search'], {
      queryParams: {
        type: SearchPageEnum.Trending
      }
    });
  }

  navigateToHistory(){
    this.router.navigate(['/search'], {
      queryParams: {
        type: SearchPageEnum.History
      }
    });
  }
}
