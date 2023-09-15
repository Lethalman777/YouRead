import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { WorkpieceCreate, WorkpieceLabel, WorkpieceRead, WorkpieceUpdate } from '../models/types/Workpiece';
import { SearchParam, SearchWorkpiece } from '../models/types/Search';
import { SearchPageEnum, SortTypeEnum } from '../models/enums/SearchEnum';

@Injectable({
  providedIn: 'root'
})

export class WorkpieceService {
  apiUrl:string = environment.api_url
  url:string = 'Workpiece'
  constructor(private http:HttpClient) { }

  public createWorkpiece(workpiece:WorkpieceCreate):Observable<WorkpieceCreate>{
    return this.http.post<WorkpieceCreate>(`${this.apiUrl}/${this.url}`, workpiece)
  }

  public updateWorkpiece(workpiece:WorkpieceUpdate):Observable<WorkpieceUpdate>{
    return this.http.put<WorkpieceUpdate>(`${this.apiUrl}/${this.url}`, workpiece)
  }

  public getWorkpieceRead(id:number):Observable<WorkpieceRead>{
    return this.http.get<WorkpieceRead>(`${this.apiUrl}/${this.url}/WorkpieceRead/${id}`)
  }

  public getWorkpieceUpdate(id:number):Observable<WorkpieceUpdate>{
    return this.http.get<WorkpieceUpdate>(`${this.apiUrl}/${this.url}/WorkpieceUpdate/${id}`)
  }

  public getWorkpieceLabel(id:number):Observable<WorkpieceLabel>{
    return this.http.get<WorkpieceLabel>(`${this.apiUrl}/${this.url}/WorkpieceLabel/${id}`)
  }

  public getUserWorkpieces(id:number):Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/UserWorkpieces/${id}`)
  }

  public searchWorkpieces(searchWorkpiece:SearchWorkpiece):Observable<WorkpieceLabel[]>{
    const jsonData = JSON.stringify(searchWorkpiece.searchParam);
    let params = new HttpParams().set('query', jsonData);

    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/Search?searchTerm=${searchWorkpiece.searchTerm}&sort=${searchWorkpiece.sortTypeEnum}&userProfileId=${searchWorkpiece.userProfileId}&IsSubscribed=${searchWorkpiece.isSubscribed}`, { params })
  }

  public getRecomendedWorkpieces(id:number):Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/Recomendation/${id}`)
  }

  public getTrendedWorkpieces():Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/Trending`)
  }

  public getHistoryWorkpieces(id:number):Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/History/${id}`)
  }

  // public getSearchTitleWorkpieces(searchTerm:string):Observable<WorkpieceLabel[]>{
  //   return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/SearchWorkpiece/${searchTerm}`)
  // }
}
