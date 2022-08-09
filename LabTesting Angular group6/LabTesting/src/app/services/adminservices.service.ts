import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminservicesService {

  constructor(private _http:HttpClient) { }

  apiUrl='http://localhost:8080/test/lab';

  getallTests():Observable<any>
  {
    return this._http.get(`${this.apiUrl}`);
  }
}
