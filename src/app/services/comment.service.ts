import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentRead, CommentWrite } from '../models/types/Comment';
import { CommentTypeEnum } from '../models/enums/CommentEnum';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl:string = environment.api_url
  url:string = 'Comment'
  constructor(private http:HttpClient) { }

  public createComment(comment:CommentWrite):Observable<CommentWrite>{
    return this.http.post<CommentWrite>(`${this.apiUrl}/${this.url}`, comment)
  }

  public getComments(targetId:number, type:CommentTypeEnum):Observable<CommentRead[]>{
    return this.http.get<CommentRead[]>(`${this.apiUrl}/${this.url}/${targetId}/${type}`)
  }
}
