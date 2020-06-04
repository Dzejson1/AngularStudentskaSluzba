import { Component, OnInit } from '@angular/core';

import { Router, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AuthService } from 'src/app/services/auth.service';
import { Student } from 'src/app/model/student';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public student:Student

  form: FormGroup;
  
  constructor(private router: Router,private main:MainComponent,private service:AuthService) { }
  ngOnInit() {

    this.form = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
   
  }

  initializeStock() {
     this.student={
      username:this.form.value.username,
      password:this.form.value.password
     }
  }


  onSubmit() {
    this.initializeStock();

    this.main.testLogin=true;
    
    
    this.service.login(this.form.value.username,this.form.value.password).subscribe((list:any)=>{
      this.student=this.service.student;
     
      this.router.navigate(['/welcome']);
    })

 
   
 
  }

  register() {
      
   }
}