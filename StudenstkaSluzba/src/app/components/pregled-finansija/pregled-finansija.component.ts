import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Finansije } from 'src/app/model/finansije';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pregled-finansija',
  templateUrl: './pregled-finansija.component.html',
  styleUrls: ['./pregled-finansija.component.css']
})
export class PregledFinansijaComponent implements OnInit {

  constructor(private service:ProfesorService,private serviceA:AuthService) { }

  public finansije:Finansije[];

  ngOnInit(): void {
    this.service.vratiFinansije(this.serviceA.student.idStudent).subscribe(lista=>{
      this.finansije=lista.obj;
    })

  }

}
