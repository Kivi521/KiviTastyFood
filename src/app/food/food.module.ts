import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { FoodDetailComponent } from './food-detail.component';
// import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FoodDetailGuard } from './food-detail.guard';
// import { StarComponent } from '../shared/star.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FoodListComponent,
    ConvertToSpacesPipe,
    FoodDetailComponent
    // StarComponent
  ],
  imports: [
    // CommonModule,
    // FormsModule,
    RouterModule.forChild([
      { path: 'products', component: FoodListComponent },
      {
        path: 'products/:id',
        canActivate: [FoodDetailGuard],
        component: FoodDetailComponent
      }
    ]),
    SharedModule,
  ]
})
export class FoodModule { }
