import { Component,OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any;

  constructor(public myService:DemoService){
   

  }
  ngOnInit(): void {
    this.myService.GetAllstudents().subscribe(
      {
        next:(data)=>{
          console.log(data)
          this.students = data;
        },
        error:(err)=>{console.log(err)}
      }
    
    )
  }
  deletestudent(id:any){
    this.myService.deletestudent(id).subscribe(data=>{}
      
    );
    this.myService.GetAllstudents().subscribe((response)=>{
      this.students=response;
    }
   
      
    )
  }

}
