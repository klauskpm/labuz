import {Inject, Injectable} from '@angular/core';
import {ENVIRONMENTER} from './environmenter.token';

@Injectable({
  providedIn: 'root'
})
export class Environmenter {

  constructor(
    @Inject(ENVIRONMENTER) private environmenter: any
  ) { }
}
