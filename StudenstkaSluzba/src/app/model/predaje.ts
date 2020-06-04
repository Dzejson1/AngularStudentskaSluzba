import { Profesor } from './profesor';
import { Predmet } from './predmet';

export class Predaje {
    constructor(public idProfesor:Profesor,
        public idPredmet:Predmet){}
        
}
