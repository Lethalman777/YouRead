import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentRead, CommentWrite } from '../models/types/Comment';
import { CommentTypeEnum } from '../models/enums/CommentEnum';
import { SearchParam } from '../models/types/Search';

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

  public getComments(type:CommentTypeEnum, searchParam:SearchParam):Observable<CommentRead[]>{
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.get<CommentRead[]>(`${this.apiUrl}/${this.url}/${type}`, { params:params })
  }
}
