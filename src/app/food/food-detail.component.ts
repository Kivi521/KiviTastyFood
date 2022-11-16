import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFood } from './ifood';

@Component({
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
  pageTitle: string = "Food Detail";
  food: IFood | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")) ;
    this.pageTitle += ": "+ id; 
    this.food = {
    "foodId": 1,
    "foodName": "Nigiri",
    "foodCode": "ktf-001",
    "description": "Small rice balls with fish, shellfish, etc. on top. There are countless varieties of nigirizushi, some of the most common ones being tuna, shrimp, eel, squid, octopus and fried egg.",
    "price": 3.99,
    "starRating": 4.3,
    "imageUrl": "assets/images/Nigiri.jpg"
    }
   }
 

  onBack(): void {
    this.router.navigate(['/food']);
  }
  
}
 