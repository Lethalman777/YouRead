import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { ReactionObjectEnum, ReactionClickedEnum } from 'src/app/shared/enums/ReactionEnum';
import { Reaction, ReactionClicked } from '../models/Reaction';
import { SearchParam } from '../models/Search';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {
  apiUrl:string = environment.api_url
  url:string = 'Reaction'

  constructor(private http:HttpClient) { }

  public createReaction(reaction:Reaction):Observable<Reaction>{
    return this.http.post<Reaction>(`${this.apiUrl}/${this.url}`, reaction)
  }

  public deleteReaction(searchParam:SearchParam, objectEnum:ReactionObjectEnum){
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.delete(`${this.apiUrl}/${this.url}/${objectEnum}`, { params:params })
  }

  public getClickedReaction(reaction:ReactionClicked):Observable<ReactionClickedEnum>{
    return this.http.post<ReactionClickedEnum>(`${this.apiUrl}/${this.url}/IsReactionClicked`, reaction)
  }

}
