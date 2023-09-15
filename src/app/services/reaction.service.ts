import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { Reaction, ReactionClicked } from '../models/types/Reaction';
import { ReactionClickedEnum, ReactionObjectEnum } from '../models/enums/ReactionEnum';
import { SearchParam } from '../models/types/Search';

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
