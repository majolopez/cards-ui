import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "enviroment";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ICategory } from "./category";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    private httpUrl: string = environment.api +'api/categories/'
    constructor(private http: HttpClient){}

    getCategories(): Observable<ICategory[]>{
        return this.http.get<ICategory[]>(this.httpUrl).pipe(
            tap( (data: any) => JSON.stringify(data)),
            catchError(this.handleError)
        )
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
    
        if ( err.error instanceof ErrorEvent) { 
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `server returne code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(()=> errorMessage);
      }
}