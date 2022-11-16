import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'kf-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
  })

  export class StarComponent implements OnChanges {
    @Input() rating: number = 0;
    cropWidth: number = 75;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
      }
    onClick(): void{
        // console.log("The rating ${this.rating}  was clicked!");
        // console.log('The rating '+ this.rating+" was clicked!");
        this.ratingClicked.emit('The rating '+ this.rating+" was clicked!");
    }

}


