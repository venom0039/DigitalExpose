import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { LoginData } from '../models/login-data';
import { Env } from '../env';

const baseUrl = Env.baseURL;
const headerData = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};
const headerDataWithAuth = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': "Bearer "
}

@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<LoginData>{
    return this.http.post<LoginData>(`${baseUrl}/login`, data);
  }
}
