import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';
import { FileName } from '../models/Workpiece';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  apiUrl:string = environment.api_url
  url:string = 'Storage'
  constructor(private http:HttpClient) { }

  // getFile(fileName: string) {
  //   return this.http.get(`${this.apiUrl}/${this.url}/GetTextFile?fileName=${fileName}`, { responseType: 'blob' });
  // }

  // getProfileImage(fileName: string):Observable<string> {
  //   return this.http.get<string>(`${this.apiUrl}/${this.url}/GetProfileImage?fileName=${fileName}`);
  // }

  // getProfileImageById(id:number):Observable<string> {
  //   return this.http.get<string>(`${this.apiUrl}/${this.url}/GetProfileImage?fileName=${id}`);
  // }

  // getWorkpieceChapter(fileName: string):Observable<FileName> {
  //   return this.http.get<FileName>(`${this.apiUrl}/${this.url}/GetWorkpieceChapter?fileName=${fileName}`);
  // }

  // getWorkpieceChapterRead(fileName: string):Observable<ChapterPages> {
  //   return this.http.get<ChapterPages>(`${this.apiUrl}/${this.url}/GetWorkpieceChapterRead?fileName=${fileName}`);
  // }

  // public getWorkpieceImage(fileName:string):Observable<string>{
  //   return this.http.get<string>(`${this.apiUrl}/${this.url}/GetWorkpieceImage?fileName=${fileName}`)
  // }

  // public getPostImages(fileNames:string[]):Observable<string[]>{
  //   const params = new HttpParams().set('fileNames', JSON.stringify(fileNames));
  //   return this.http.get<string[]>(`${this.apiUrl}/${this.url}/GetPostImages`, { params })
  // }

  public uploadImage(formFile:FormData) : Observable<FileName>{
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<FileName>(`${this.apiUrl}/${this.url}/UploadImage`,  formFile)
  }

  public uploadMultipleImages(formFiles:FormData) : Observable<FileName[]>{
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<FileName[]>(`${this.apiUrl}/${this.url}/UploadMultipleImages`,  formFiles)
  }

  // public uploadProfileImage(formFiles:FormData) : Observable<FileName>{
  //   return this.http.post<FileName>(`${this.apiUrl}/${this.url}/UploadProfileImage`,  formFiles)
  // }

  // public uploadPostImage(formFiles:FormData) : Observable<FileName[]>{
  //   return this.http.post<FileName[]>(`${this.apiUrl}/${this.url}/UploadPostImage`,  formFiles)
  // }

  // uploadChapter(formData:FormData):Observable<FileName>{
  //   return this.http.post<FileName>(`${this.apiUrl}/${this.url}/UploadWorkpieceChapter`,  formData)
  // }
}
