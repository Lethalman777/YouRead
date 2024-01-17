import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { ReadHistoryCreate, ReadHistory } from '../models/ReadHistory';

@Injectable({
  providedIn: 'root'
})
export class ReadHistoryService {
  apiUrl:string = environment.api_url
  url:string = 'ReadHistory'

  constructor(private http:HttpClient) { }

  public createReadHistory(readHistory:ReadHistoryCreate):Observable<ReadHistory>{
    return this.http.post<ReadHistory>(`${this.apiUrl}/${this.url}`, readHistory)
  }

  public updateReadHistory(readHistory:ReadHistory):Observable<ReadHistory>{
    console.log("jjj")
    return this.http.put<ReadHistory>(`${this.apiUrl}/${this.url}`, readHistory)
  }

  public getReadHistory(workpieceId:number, userProfileId:number):Observable<ReadHistory>{
    return this.http.get<ReadHistory>(`${this.apiUrl}/${this.url}/${workpieceId}/${userProfileId}`)
  }
}
