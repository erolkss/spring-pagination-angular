import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { ApiResponse } from './interface/api-response';
import { Page } from './interface/page';
import { HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  usersState$: Observable<{appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse}>;

  constructor (
    private UserService: UserService
  ){}

  ngOnInit(): void {
    this.usersState$ = this.UserService.users$().pipe(
      map((response: ApiResponse<Page>) => {
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response})
      }
    ),
    startWith({ appState: 'APP_LOADING'}),
    catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error}))
    )}
}
