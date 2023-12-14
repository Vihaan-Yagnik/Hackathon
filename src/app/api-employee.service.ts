import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEmployeeService {
  empUrl = 'http://127.0.0.1:3300/employee'
  projUrl = 'http://127.0.0.1:3300/project'
  constructor(private _http:HttpClient){}  
  
  getAll(){
    return this._http.get(this.empUrl)
  }

  createProject(data : any){
    return this._http.post(this.projUrl, data)
  }
}
