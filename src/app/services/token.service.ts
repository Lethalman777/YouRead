import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private authChangeSub = new Subject<boolean>()
  public authChanged = this.authChangeSub.asObservable();

  public sendAuthStateChangeNotification = (isAuthenticated:boolean) => {
    this.authChangeSub.next(isAuthenticated);
  }

  public clear(){
    sessionStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }
  public isLoggedIn(){
    return sessionStorage.getItem("token") != null;
  }

  public set(token:string){
    sessionStorage.setItem("token", token);
    this.sendAuthStateChangeNotification(true);
  }

  // public get(){
  //   return sessionStorage.getItem("token");
  // }
}
