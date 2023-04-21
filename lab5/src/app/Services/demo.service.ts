import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
 

  constructor( private readonly myClient:HttpClient) {}

  private readonly Base_URL = "http://localhost:3000/students";
    //Methods [All Requests]
    GetAllstudents(){
      //method[Get-Delete-Put-Patch]
      return this.myClient.get(this.Base_URL);
    }
    GetstudentByID(id:any){
      return this.myClient.get(this.Base_URL+"/"+id);
    }
    AddNewstudent(newstudent:any){
      return this.myClient.post(this.Base_URL, newstudent);
    }
    deletestudent(id:any){
      return this.myClient.delete(this.Base_URL+"/"+id);
    }
    updatestudent(student:any){
      return this.myClient.put(this.Base_URL+"/"+student.id,student);
    }

  }


