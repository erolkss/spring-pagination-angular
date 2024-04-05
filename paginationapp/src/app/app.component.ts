import { UserService } from './service/user.service';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { ApiResponse } from './interface/api-response';
import { Page } from './interface/page';
import { HttpErrorResponse } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent implements OnInit {
  usersState$: Observable<{appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse}>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  constructor (
    private UserService: UserService
  ){}

  ngOnInit(): void {
    this.usersState$ = this.UserService.users$().pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response})
      }
    ),
    startWith({ appState: 'APP_LOADING'}),
    catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error}))
    )
  }

  goToPage(name?: string, pageNumber?: number ): void {
    this.usersState$ = this.UserService.users$(name, pageNumber).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response})
      }
    ),
    startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value}),
    catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error}))
    )
  }

  goToNextOrPreviousPage(direction?: string, name?: string): void{
    this.goToPage(name, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }
}
