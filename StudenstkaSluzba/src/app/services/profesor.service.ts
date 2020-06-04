import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Predaje } from '../model/predaje';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  vratiListu(idStudent:number):Observable<any>{
    return this.http.get<any>('/profesor/nadjiPredmetZaProfesora'+idStudent);
  }
  vratiPredmete(idProfesor:number):Observable<any>{
    return this.http.get<any>('/profesor/dajPredmete'+idProfesor);
  }

  vratiStudenteZaPredmet(idPredmet:number):Observable<any>{
    return this.http.get<any>('/profesor/studenti'+idPredmet);
  }

   
  
  vratiPredmetProfesor(brojSemestra:number):Observable<any>{
    return this.http.get<any>('/profesor/vratiPredmetProfesor'+brojSemestra);
  }

  vratiFinansije(idStudent:number):Observable<any>{
    return this.http.get<any>('/profesor/vratiFinansije'+idStudent);
  }
  sacuvajIzabraniPredmet(idStudent:number,idPredmet:number,idProfesor:number):Observable<any>{
    return this.http.post('/profesor/sacuvajIzabraniPredmet',
    {
      
      idStudent:idStudent,
      idPredmet:idPredmet,
      idProfesor:idProfesor
      
      
    });
    
  }

  

  
}
