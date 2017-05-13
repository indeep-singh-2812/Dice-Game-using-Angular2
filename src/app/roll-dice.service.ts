import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RollDiceService {
private url = '/api/getValue';
  constructor(private _http: Http) {

   }

   getNumber(): number{
     let num: number = (Math.floor(Math.random() * 6) + 1);
     return num;
   }

}
