import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private _http:HttpClient) { }

  // connect frontent to backend

  apiUrl='http://localhost:8080/test/';

  //get all data

  getallData():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }


}
