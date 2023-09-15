import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { PostCreate, PostRead } from '../models/types/Post';
import { SearchParam } from '../models/types/Search';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl:string = environment.api_url
  url:string = 'Post'

  constructor(private http:HttpClient) { }

  public createPost(post:PostCreate):Observable<PostCreate>{
    return this.http.post<PostCreate>(`${this.apiUrl}/${this.url}`, post)
  }

  public getUserPosts(id:number):Observable<PostRead[]>{
    console.log(id)
    return this.http.get<PostRead[]>(`${this.apiUrl}/${this.url}/${id}`)
  }

  public searchPosts(searchParam:SearchParam):Observable<PostRead[]>{
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.get<PostRead[]>(`${this.apiUrl}/${this.url}/Search`, { params })
  }
}
