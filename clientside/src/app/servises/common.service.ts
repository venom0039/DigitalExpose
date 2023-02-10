import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LoginData } from '../models/login-data';
import { Env } from '../env';

const baseUrl = Env.baseURL;
const headerData = { headers: new HttpHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json'  
})};
const headerDataWithAuth = { headers: new HttpHeaders({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${sessionStorage.getItem("token")}`
})};

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(private http: HttpClient) { }

  login(data: any): Observable<LoginData>{
    return this.http.post<LoginData>(`${baseUrl}/login`, data, headerData);
  }
}
