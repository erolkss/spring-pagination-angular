import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../interface/page';
import { ApiResponse } from '../interface/api-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly serverUrl: string = 'http://localhost:8085';

  constructor(
    private http: HttpClient
  ) { }

  // Make call to the back end API to retrieve page of users
  users$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> =>
      this.http.get<any>(`${this.serverUrl}/api/pagination/users?name=${name}&page=${page}&size=${size}`);



  // getUsers(name: string = '',  page: number = 0, size: number = 10): Observable<ApiResponse<Page>>{
  //   return this.http.get<any>(`${this.serverUrl}/api/pagination/users?=${name}&page=${page}&size=${size}`);
  // }
}
