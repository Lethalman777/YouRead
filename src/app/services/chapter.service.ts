import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { ChapterCreate, ChapterLabel, ChapterRead, ChapterWrite } from '../models/types/Chapter';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  apiUrl:string = environment.api_url
  url:string = 'Chapter'

  constructor(private http:HttpClient) { }

  public createChapter(chapter:ChapterCreate):Observable<ChapterCreate>{
    return this.http.post<ChapterCreate>(`${this.apiUrl}/${this.url}`, chapter)
  }

  public updateChapter(chapter:ChapterWrite):Observable<ChapterWrite>{
    return this.http.put<ChapterWrite>(`${this.apiUrl}/${this.url}`, chapter)
  }

  public updateChapterLabel(chapter:ChapterLabel):Observable<ChapterLabel>{
    return this.http.put<ChapterLabel>(`${this.apiUrl}/${this.url}/ChapterLabel`, chapter)
  }

  public getChapterLabels(id:number):Observable<ChapterLabel[]>{
    return this.http.get<ChapterLabel[]>(`${this.apiUrl}/${this.url}/Chapters/${id}`)
  }

  public getChapterWrite(id:number):Observable<ChapterWrite>{
    return this.http.get<ChapterWrite>(`${this.apiUrl}/${this.url}/${id}`)
  }

  public getChapterRead(workpieceId:number, chapterNumber:number):Observable<ChapterRead>{
    return this.http.get<ChapterRead>(`${this.apiUrl}/${this.url}/ChapterRead/${workpieceId}/${chapterNumber}`)
  }
}
