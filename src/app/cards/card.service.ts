import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "enviroment";
import { catchError, Observable, tap, throwError } from "rxjs";
import { ICard } from "./card";

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private httpUrl: string =  environment.api+ 'api/cards/'
    constructor(private http: HttpClient){}

    getCardsByCategory(categoryId: string): Observable<ICard[]>{
        console.log(this.httpUrl+categoryId)
        return this.http.get<ICard[]>(this.httpUrl+categoryId).pipe(
            tap( (data: any) => {
                JSON.stringify(data)
                data?.map( (card: ICard) => {
                    card.showFront = true
                })
            }),
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