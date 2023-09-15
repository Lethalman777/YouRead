import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable, Subscription } from 'rxjs';
import { SubscriptionCreate } from '../models/types/Subscription';
import { AuthorLabel } from '../models/types/User';
import { SearchParam } from '../models/types/Search';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  apiUrl:string = environment.api_url
  url:string = 'Subscription'

  constructor(private http:HttpClient) { }

  public createSubscription(subscription:SubscriptionCreate):Observable<Subscription>{
    return this.http.post<Subscription>(`${this.apiUrl}/${this.url}`, subscription)
  }

  public getSubscriptions(id:number):Observable<AuthorLabel[]>{
    return this.http.get<AuthorLabel[]>(`${this.apiUrl}/${this.url}/GetSubscriptions?id=${id}`)
  }

  public getSubscription(searchParam:SearchParam):Observable<Subscription[]>{
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.get<Subscription[]>(`${this.apiUrl}/${this.url}`, { params:params })
  }
}
