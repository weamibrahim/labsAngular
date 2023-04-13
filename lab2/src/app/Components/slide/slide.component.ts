import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  index = 0;
  intervalId: any;
  images = [
    "assets/images/1.jpg",
    "assets/images/2.jpg",
    "assets/images/3.jpg",
    "assets/images/4.jpg",
    "assets/images/5.jpg"

  ]
  prev() {

    if (this.index > 0) {
      this.index--;
    }
  }
  next() {

  if(this.index<this.images.length-1){
      this.index++;
     }
  }
 
 open() {
    this.intervalId = setInterval(() => {
      if(this.index===this.images.length-1){
        this.index=0;

       }
       else{
        this.index++;
       }
    }, 400);
  }
  stop() {
    clearInterval(this.intervalId);
  }

}
