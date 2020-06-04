import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public testLogin:boolean;

  public role:number;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    console.log(this.service.role+"@!@@@@@@@@@@@@@@@")
    this.role=this.service.role;
  }
  // !isRole()
  isRole() {
    if(this.service.role==0){
      return false;
    }else{
      return true;
    }
    
  }

  isStudent() {
    if(this.service.role==1){
      return true;
    }else{
      return false;
    }
    
  }

  isTeacher() {
    if(this.service.role==2){
      return true;
    }else{
      return false;
    }
    
  }
 
}
