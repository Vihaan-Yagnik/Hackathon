import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiProjectJenishService {
  apiProjectUrl = 'http://127.0.0.1:3300/project/'
  apiTaskUrl = 'http://127.0.0.1:3300/updateTask/'
  constructor(private _http: HttpClient) { }
  getById(id : any){
    return this._http.get(this.apiProjectUrl + id);
  }
  
  createTask(data: any, id: any){
    return this._http.post(this.apiProjectUrl+ "createTask/" + id, data);
  }

  updateTask(data: any){
    return this._http.post(this.apiTaskUrl, data)
  }
}
