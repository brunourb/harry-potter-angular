import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AtoresModel } from '../atores.model';

@Injectable({
  providedIn: 'root'
})
export class AtoresDetailService {

  constructor() { }

  getAtores(): Observable<AtoresModel[]>{
    
    return new Observable<AtoresModel[]>;
  }
}
