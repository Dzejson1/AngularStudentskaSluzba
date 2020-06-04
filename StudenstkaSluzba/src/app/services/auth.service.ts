import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Student } from '../model/student';
import { Router } from '@angular/router';
import { Profesor } from '../model/profesor';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient,private router: Router) { }

  public role:number=0;

  public student:Student;
  
  public profesor:Profesor;

  public authToken: string = null;
  
  set token(token: string) {
    this.authToken = token;
  }

  get token() {
    return this.authToken;
  }

  isLoggedIn() {
    return this.token != null;
  }
 

  login(username:string,password:string) : Observable<any> {
    console.log(username+"@#@#@#@#@#"+password)
    return this.http.post('/profesor/login',{
      username:username,
      password:password
    })
    .pipe(map((resp: any) => {
      if(resp.obj.role==1){
        this.authToken = resp.token;
        this.student=resp.obj;
        this.role=resp.obj.role;
        console.log("STUDENT")
      }else  if(resp.obj.role==2){
        this.authToken = resp.token;
        this.profesor=resp.obj;
       
        this.role=resp.obj.role;
        console.log("PROFESOR")
      }
      return resp;
      }));

  }




        
}
