import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { Reaction, ReactionClicked } from '../models/types/Reaction';
import { ReactionClickedEnum } from '../models/enums/ReactionEnum';

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

  public getClickedReaction(reaction:ReactionClicked):Observable<ReactionClickedEnum>{
    return this.http.post<ReactionClickedEnum>(`${this.apiUrl}/${this.url}/IsReactionClicked`, reaction)
  }

}
