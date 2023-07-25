import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { UserRegistration } from '../components/pages/register-page/register-page.component';
import { NewChapter } from '../models/types/Genre';
import { AuthorLabel, Login, UserCreate, UserProfile } from '../models/types/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string = environment.api_url
  url:string = 'User'
  loginUrl:string = 'Login'

  constructor(private http:HttpClient) { }

  public createUser(user:UserCreate):Observable<UserProfile>{
    return this.http.post<UserProfile>(`${this.apiUrl}/${this.url}`, user)
  }

  public loginUser(login:Login):Observable<AuthorLabel>{
    return this.http.post<AuthorLabel>(`${this.apiUrl}/${this.url}/Login`, login)
  }

  public getAuthor(id:number):Observable<AuthorLabel>{
    return this.http.get<AuthorLabel>(`${this.apiUrl}/${this.url}/Author/${id}`)
  }

  public getProfile(id:number):Observable<UserProfile>{
    return this.http.get<UserProfile>(`${this.apiUrl}/${this.url}/Profile/${id}`)
  }

  public updateProfile(profile:UserProfile):Observable<UserProfile>{
    return this.http.put<UserProfile>(`${this.apiUrl}/${this.url}`, profile)
  }
}
