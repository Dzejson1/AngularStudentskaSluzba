import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Predmet } from 'src/app/model/predmet';
import { Profesor } from 'src/app/model/profesor';
import { Predaje } from 'src/app/model/predaje';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-izaberi-predmete',
  templateUrl: './izaberi-predmete.component.html',
  styleUrls: ['./izaberi-predmete.component.css']
})
export class IzaberiPredmeteComponent implements OnInit {

  constructor(private profesor:ProfesorService,private flashMessage:FlashMessagesService,private service:AuthService) { }

  public predmet:Predmet[]

  public profesor1:Profesor[];
  public uso:boolean;

  public predaje:Predaje[];


  ngOnInit(): void {
    this.predaje=new Array<Predaje>();

    this.profesor.vratiPredmetProfesor(this.service.student.brojSemestra).subscribe((lista:any)=>{

      this.profesor1=lista.obj;

      this.predmet=lista.obj1;
     
      this.profesor1.forEach((element, index) => {
        
          this.predaje[index]=new Predaje(element,this.predmet[index]);
        
      });

      
    },err=>{
      console.log(err); 
    })
   
    
  }
  public selectedId:any;
  
  public highlightRow(index) {
    this.selectedId = index;

  }

  zapamtiKliknuto(){
    
    
    console.log(this.predaje[this.selectedId-1].idPredmet.idPredmet+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@")
    console.log(this.predaje[this.selectedId-1].idProfesor.idProfesor+"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!@@@@@@@@@@@@")
    this.profesor.sacuvajIzabraniPredmet(this.service.student.idStudent,this.predaje[this.selectedId-1].idPredmet.idPredmet,this.predaje[this.selectedId-1].idProfesor.idProfesor).subscribe(res=>{
      this.flashMessage.show('Uspesno sacuvano!', { cssClass: 'alert-success', timeout: 700 });
    })
    

  }

}
