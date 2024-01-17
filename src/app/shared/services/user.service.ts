import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { UserCreate, UserProfile, Login, AuthorLabel, AuthResponse } from '../models/User';
import { getEmptyParam } from '../functions/SearchFunction';

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

  public register(user:UserCreate):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/${this.url}`, user)
  }

  public login(login:Login):Observable<AuthResponse>{
    console.log("hjhj")
    return this.http.post<AuthResponse>(`${this.apiUrl}/${this.url}/Login`, login)
  }

  public checkEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.url}/CheckEmail/${email}`);
  }

  public loggedUserId() {
    let token: any = sessionStorage.getItem("token");

    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.apiUrl}/${this.url}/CurrentLoggedUserId`, { headers: header });
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

  public deleteProfile(id:number):Observable<any>{
    console.log(id)
    return this.http.delete(`${this.apiUrl}/${this.url}/${id}`)
  }
}
