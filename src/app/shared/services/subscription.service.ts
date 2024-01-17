import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { SubscriptionCreate, SubscriptionLabel } from '../models/Subscription';
import { SearchParam } from '../models/Search';
import { AuthorLabel } from '../models/User';

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

  public getSubscriptions(id:number):Observable<SubscriptionLabel[]>{
    return this.http.get<SubscriptionLabel[]>(`${this.apiUrl}/${this.url}/GetSubscriptions?id=${id}`)
  }

  public getSubscription(searchParam:SearchParam):Observable<Subscription[]>{
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.get<Subscription[]>(`${this.apiUrl}/${this.url}`, { params:params })
  }
}
