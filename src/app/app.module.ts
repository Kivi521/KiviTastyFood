import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food/food-list.component';
import { ConvertToHashtagPipe } from './shared/convert-to-hashtag.pipe';
import { StarComponent } from './shared/star.component';
import {HttpClientModule} from "@angular/common/http";
import { FoodDetailComponent } from './food/food-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { FoodDetailGuard } from './food/food-detail.guard';
import { FoodModule } from './food/food.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // FoodListComponent,
    //ConvertToHashtagPipe,
    // StarComponent,
    // FoodDetailComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "food", component: FoodListComponent},
      {
        path: "food/:id",
        canActivate:[FoodDetailGuard], 
        component: FoodDetailComponent 
      },
      {path: "welcome", component: WelcomeComponent},
      {path: "about", component: AboutComponent},
      {path: "", redirectTo:" welcome ", pathMatch:"full"},
      {path: "**", redirectTo: "welcome", pathMatch:"full"}

    ]),
    FoodModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
