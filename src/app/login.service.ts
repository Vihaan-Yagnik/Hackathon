import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiurl = "http://192.168.29.215:3300/login"

  constructor(private _http:HttpClient) { 

  }

  post(data:any){
    return this._http.post(this.apiurl,data)
  }
}
