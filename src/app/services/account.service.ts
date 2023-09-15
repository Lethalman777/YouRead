import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, AuthorLabel, AuthResponse, UserCreate, UserProfile } from '../models/types/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl:string = environment.api_url
  url:string = 'Account'

  constructor(private http:HttpClient) { }

  public register(user:UserCreate):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/${this.url}`, user)
  }

  public login(login:Login):Observable<AuthResponse>{
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
}
