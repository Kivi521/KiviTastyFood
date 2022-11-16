import { Component, OnDestroy, OnInit } from "@angular/core";
import { FoodService } from "./food.service";
import { IFood } from "./ifood";

@Component({
    // selector:"kf-food",
    templateUrl:"./food-list.component.html",
    styleUrls: ['./food-list.component.css']

})

export class FoodListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Food List';
    imgMargin: number =2;
    showImage: boolean = false;
    // listFilter: string = "cart"; 
    errorMessage: string = "";
    sub: any; Subscription: any; 
    


    private _listFilter: string = "";
    get listFileter(): string{
        return this._listFilter
    }
    set listFilter(value: string) {
        this._listFilter = value;
        console.log('In setter:', value);
        this.filteredFood = this.performFilter(value);
      }

      filteredFood: IFood[] = [];

      constructor(private foodService: FoodService){

      }
    

      food: IFood[]=[];

    // food: IFood[]=[
    //     {  
    //         "foodId": 1,
    //         "foodName": "Nigiri",
    //         "foodCode": "ktf-001",
    //         "description": "Small rice balls with fish, shellfish, etc. on top. There are countless varieties of nigirizushi, some of the most common ones being tuna, shrimp, eel, squid, octopus and fried egg.",
    //         "price": 3.99,
    //         "starRating": 4.2,
    //         "imageUrl": "assets/images/Nigiri.jpg"
    //     },
    //     {
    //         "foodId": 2,
    //         "foodName": "Gunkan",
    //         "foodCode": "ktf-002",
    //         "description": "Small cups made of sushi rice and dried seaweed filled with seafood, etc. There are countless varieties of gunkanzushi, some of the most common ones being sea urchin and various kinds of fish eggs.",
    //         "price": 4.99,
    //         "starRating": 4.7,
    //         "imageUrl": "assets/images/Gunkan.jpg"
    //       }
    // ];

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
      this.sub = this.foodService.getFood().subscribe({
            next: food => {
                this.food = food;
                this.filteredFood = this.food;},

            error: err=> this.errorMessage = err
            
        });
        
        // console.log("In OnInit");
        //  
    }
    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    performFilter(filterBy: string): IFood[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.food.filter((product: IFood) =>
          product.foodName.toLocaleLowerCase().includes(filterBy));
      }

      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }
}