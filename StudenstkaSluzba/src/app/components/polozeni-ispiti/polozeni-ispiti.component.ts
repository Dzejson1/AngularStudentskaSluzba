import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Predaje } from 'src/app/model/predaje';
import { Profesor } from 'src/app/model/profesor';
import { Predmet } from 'src/app/model/predmet';

@Component({
  selector: 'app-polozeni-ispiti',
  templateUrl: './polozeni-ispiti.component.html', 
  styleUrls: ['./polozeni-ispiti.component.css']
})

export class PolozeniIspitiComponent implements OnInit {
 
  constructor(private profesor:ProfesorService) { }

  public predmet:Predmet[]

  public profesor1:Profesor;
  public uso:boolean;
  //public predmet:string[];



  ngOnInit(): void {
    this.profesor.vratiListu(2).subscribe((lista:any)=>{
     // console.log(lista.obj[0].naziv+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
      this.predmet=lista.obj;
      
        
      console.log(this.predmet.length+"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    },err=>{
      console.log(err); 
    })
   
    
  }



  }

