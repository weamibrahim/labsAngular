import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from "@angular/router"
@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id:number|undefined;
  student:any={};
  constructor(private myService:DemoService,myRoute:ActivatedRoute,private router:Router){
   this.id=+myRoute.snapshot.params["id"];
  }
  ngOnInit(){
   
    this.myService.GetstudentByID(this.id).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
 
  update() {
    this.myService.updatestudent(this.student).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/students']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  }
  //constructor(private myService:DemoService){  }

//   update(name:any,age:any, email:any, phone:any){
//     let student = {name, age, email, phone};
//     this.myService.updatestudent(student)
  
// }
