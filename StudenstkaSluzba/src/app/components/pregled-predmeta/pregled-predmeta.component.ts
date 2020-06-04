import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Predmet } from 'src/app/model/predmet';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pregled-predmeta',
  templateUrl: './pregled-predmeta.component.html',
  styleUrls: ['./pregled-predmeta.component.css']
})
export class PregledPredmetaComponent implements OnInit {

  constructor(private authService:AuthService,private service:ProfesorService, private router: Router) { }

  public selectedId:any;
  
  public predmeti:Predmet[];

  public highlightRow(index) {
    this.selectedId = index;

  }

  ngOnInit(): void {
    this.service.vratiPredmete(this.authService.profesor.idProfesor).subscribe((lista:any)=>{
      this.predmeti=lista.obj;
    })
  }
  zapamtiKliknuto(){
    //this.service.sacuvajIzabraniPredmet(2,this.predaje[this.selectedId-1].idPredmet.idPredmet,this.predaje[this.selectedId-1].idProfesor.idProfesor).subscribe(res=>{
     // this.flashMessage.show('Uspesno sacuvano!', { cssClass: 'alert-success', timeout: 700 });
   // })
   this.router.navigate(['/prikazStudenata/', this.predmeti[this.selectedId-1].idPredmet]);
    

  }

 

}
