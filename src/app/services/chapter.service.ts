import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { ChapterCreate, ChapterLabel, ChapterRead, ChapterWrite } from '../models/types/Chapter';
import { SearchParam } from '../models/types/Search';

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

  public publishChapter(id:number, isPublished: boolean){
    return this.http.post(`${this.apiUrl}/${this.url}/Publish/${id}`, isPublished)
  }

  public updateChapter(chapter:ChapterWrite):Observable<ChapterWrite>{
    return this.http.put<ChapterWrite>(`${this.apiUrl}/${this.url}`, chapter)
  }

  public updateChapterLabel(chapter:ChapterLabel):Observable<ChapterLabel>{
    return this.http.put<ChapterLabel>(`${this.apiUrl}/${this.url}/ChapterLabel`, chapter)
  }

  public getChapterLabels(searchParam:SearchParam):Observable<ChapterLabel[]>{
    const jsonData = JSON.stringify(searchParam);
    let params = new HttpParams().set('query', jsonData);
    return this.http.get<ChapterLabel[]>(`${this.apiUrl}/${this.url}/Chapters`, {params})
  }

  public getChapterWrite(id:number):Observable<ChapterWrite>{
    return this.http.get<ChapterWrite>(`${this.apiUrl}/${this.url}/${id}`)
  }

  public getChapterRead(workpieceId:number, chapterNumber:number):Observable<ChapterRead>{
    return this.http.get<ChapterRead>(`${this.apiUrl}/${this.url}/ChapterRead/${workpieceId}/${chapterNumber}`)
  }
}
