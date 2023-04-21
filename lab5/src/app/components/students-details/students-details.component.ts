import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';
@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
ID:any;

student:any;
constructor(myRoute:ActivatedRoute,public myService: DemoService){
  this.ID= myRoute.snapshot.params["id"];
}
ngOnInit(): void {
  this.myService.GetstudentByID(this.ID).subscribe(
    {
      next:(data)=>{
        console.log(data);
        this.student = data;
      },
      error:(err)=>{console.log(err)}
    }
  );
}
}
