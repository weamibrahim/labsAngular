import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  
  ID=0;
  name="weam";
  age=24;
  email="weamibrahim@gmail.com"
  constructor(myRoute:ActivatedRoute){
    // console.log(myRoute.snapshot.params["id"]);
    this.ID = myRoute.snapshot.params["id"];
    
  }
}
