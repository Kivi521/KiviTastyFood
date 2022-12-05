import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFood } from './ifood';
import { FoodService } from "./food.service";

@Component({
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

export class FoodDetailComponent implements OnInit, OnDestroy{
  pageTitle: string = "Food Detail";
  selectedFood: IFood | undefined;
  sub: any; Subscription: any; 
  errorMessage: string = "";


  constructor(private route: ActivatedRoute, private router: Router, private foodService: FoodService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")) ;
    this.pageTitle += ": "+ id; 
    // this.food = {
    // "foodId": id,
    // "foodName": "Nigiri",
    // "foodCode": "ktf-001",
    // "description": "Small rice balls with fish, shellfish, etc. on top. There are countless varieties of nigirizushi, some of the most common ones being tuna, shrimp, eel, squid, octopus and fried egg.",
    // "price": 3.99,
    // "starRating": 4.3,
    // "imageUrl": "assets/images/Nigiri.jpg"
    // }
    
    this.sub = this.foodService.getFood().subscribe({
      next: allFood => {
          this.selectedFood = allFood.filter(f => f.foodId === id)[0];
        }, 

      error: err=> this.errorMessage = err
      
  });
    
   }
 
   ngOnDestroy(){
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['/food']);
  }
  
}
 