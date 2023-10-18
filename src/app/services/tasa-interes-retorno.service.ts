import { Injectable } from '@angular/core';
import { TasaRetornoModel } from '../models/tasaRetorno';

@Injectable({
  providedIn: 'root'
})
export class TasaInteresRetornoService {

  constructor() { }

  public CalcularTIR(tasa:TasaRetornoModel){
    debugger
    (tasa.valorPeriodo == 1)
    ?tasa.CalcularPrimerPeriodo()
    :tasa.CalcularSegundoPeriodo();
  }
}
