import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError } from "rxjs";
import { IFood } from "./ifood";

@Injectable({
    providedIn: "root"
})
export class FoodService{

    private foodUrl = "api/food/food.json";

    constructor(private http: HttpClient){}

    food: IFood[]=[];
    selectedFood = {};

    getFood():Observable<IFood[]>{
        return this.http.get<IFood[]>(this.foodUrl). pipe(
            tap(
                data=>
                {
                    console.log("All", JSON.stringify(data));
                    this.food = data;
                    }
                ),
            catchError(this.handleError)
        );

    }
    

    private handleError(err: HttpErrorResponse){
        let errorMessage = "";
        if(err.error instanceof ErrorEvent){
            errorMessage = "An error occurred: ${err.error.message}";
        } else{
            errorMessage = "Server returned code: ${err.status}, error message is: ${err.message}";
        }
        console.error(errorMessage);
        return throwError(()=>errorMessage);
    }

}