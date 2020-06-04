import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-prikaz-studenata',
  templateUrl: './prikaz-studenata.component.html',
  styleUrls: ['./prikaz-studenata.component.css']
})
export class PrikazStudenataComponent implements OnInit {

  constructor(private service:ProfesorService,private route: ActivatedRoute) { }

  public studenti:Student[];

  ngOnInit(): void {
    this.service.vratiStudenteZaPredmet(this.route.snapshot.params['id']).subscribe((lista:any)=>{
      this.studenti=lista.obj;

    })
    
  }

}
