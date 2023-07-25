import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { WorkpieceCreate, WorkpieceLabel, WorkpieceRead, WorkpieceUpdate } from '../models/types/Workpiece';

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

  public searchWorkpieces():Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/Search`)
  }

  public getRecomendedWorkpieces(amount:number, recomendation:number):Observable<WorkpieceLabel[]>{
    return this.http.get<WorkpieceLabel[]>(`${this.apiUrl}/${this.url}/Recomendation/${amount}/${recomendation}`)
  }
}
