import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenreEnum, SelectEnum, getGenreValues } from 'src/app/models/enums/GenreEnum';
import { SearchOperatorEnum, SearchDataTypeEnum, SearchPageEnum } from 'src/app/models/enums/SearchEnum';
import { getRandomTopics } from 'src/app/models/functions/Recomendation';
import { getEmptyParam, getSearchParam } from 'src/app/models/functions/SearchFunction';
import { SearchParam } from 'src/app/models/types/Search';
import { WorkpieceLabel } from 'src/app/models/types/Workpiece';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import { WorkpieceService } from 'src/app/services/workpiece.service';

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

  constructor(private router:Router, private workpieceService:WorkpieceService, private tokenService:TokenService, private userService:UserService){

    if(this.isLogged){
      workpieceService.getRecomendedWorkpieces(this.loggedUserProfileId).subscribe(data=>{
        this.recomendedWorkpieces=data
        const extra = this.recomendedWorkpieces.length%4
        this.recomendedWorkpieces = this.recomendedWorkpieces.slice(0, this.recomendedWorkpieces.length-1-extra)
      })
    }

    workpieceService.getTrendedWorkpieces().subscribe(data=>{
      this.trendedWorkpieces=data
    })
    if(this.isLogged){
      workpieceService.getHistoryWorkpieces(this.loggedUserProfileId).subscribe(data=>{
        this.historyWorkpieces=data
      })
    }

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
