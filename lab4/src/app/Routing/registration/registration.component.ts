import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  validationForm = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    age:new FormControl(null,[Validators.min(20),Validators.max(40) ,Validators.required])

  })

  get AgeValid(){
    return this.validationForm.controls["age"].valid;
  }
  get emailValid(){
    return this.validationForm.controls["email"].valid;
  }
  get nameValid(){
    return this.validationForm.controls["name"].valid;
  }
  firenow(){
    if(this.validationForm.valid){
      alert("date are store")
    }
    else{
      alert("data are not vailed")
    }
   
  }

  Add(){
    console.log("Form Value: ",this.validationForm.value);
    console.log("Form Valid: ",this.validationForm.valid);
    console.log("Name Value: ",this.validationForm.controls["name"].value);
    console.log("Name Valid: ",this.validationForm.controls["name"].valid);
    console.log("Age Value: ",this.validationForm.controls["age"].value);
    console.log("Age Valid: ",this.validationForm.controls["age"].valid);
    console.log("Age Error: ",this.validationForm.controls["age"].errors);
    console.log("-------------------------")
    if(this.validationForm.valid){
      //Logic ==> push ==> emit
    }
  }
}
