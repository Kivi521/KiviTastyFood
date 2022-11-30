import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
//import { ConvertToHashtagPipe } from './convert-to-hashtag.pipe';



@NgModule({
  declarations: [
    StarComponent,
    //ConvertToHashtagPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    //ConvertToHashtagPipe,
  ]
})
export class SharedModule { }
