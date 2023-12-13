import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTaskJenishService {
  apiUrl = 'http://192.168.29.215:3300/task/'
  constructor(private _http: HttpClient) { }

  create(data:any){
    this._http.post(this.apiUrl, data)
  }
}
