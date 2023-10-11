import { Injectable } from '@angular/core';
import { IntereSimple, Periodo } from '../models/interesSimple';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class InteresSimpleServiceService {

  constructor(private toastr: ToastrService,) { }

  alertErrorMessage(Message: string) {
    this.toastr.error(Message, 'Error', {
      timeOut: 3000, // Duración de la notificación en milisegundos
      progressBar: true, // Mostrar barra de progreso
      progressAnimation: 'increasing', // Animación de progreso
      positionClass: 'toast-top-right', // Posición de la notificación en la pantalla

    })
  }

  private validProperty(ineteres: any): string {
    const objeto: { [key: string]: any } = ineteres
    let campo = '';
    for (const propiedad in objeto) {
      if (objeto.hasOwnProperty(propiedad)) {
        const valor = objeto[propiedad];
        if (valor === '' || valor === null || (Array.isArray(valor) && valor.length === 0)) {
          campo = propiedad
        }
      }
    }
    return campo
  }

  calcularInteresSimple_(interes: any,): string {
    let campoVacio = this.validProperty(interes);
    let message = 'Todos los campos estan llenos';
    debugger
    switch (campoVacio) {
      case 'interes':
        let sum = this.getPeriodoSum(interes.periodos);
        debugger
        const i = interes.capital * (interes.tasaInteres / 100) * (sum);
        message = `interes $${i}`
        break;
      case 'capital':
        let suma = this.getPeriodoSum(interes.periodos);
        const c = interes.interes / ((interes.tasaInteres / 100) * suma);
        message = `capital $${c.toFixed(3)}`
        break;
      case 'tasaInteres':
        debugger
        let sum_ = this.getPeriodoSum(interes.periodos);
        const TI = (interes.interes) / ((interes.capital) * sum_);
        message = `tasaInteres ${TI*12}%`
        break;
      case 'periodos':
        const p = (interes.interes) / ((interes.capital) * (interes.tasaInteres / 100));
        message = this.getMessageTiempo(p);
        break;
      default:
        break;
    }
    return message
  }

  private getValuePeriodo(periodo: Periodo) {
    switch (periodo.periodo) {
      case 'anos':
        return periodo.valor;
      case 'dias':
        return periodo.valor / 365;
      case 'meses':
        return periodo.valor / 12;
      default:
        return 0;
    }
  }

  private getPeriodoSum(periodos: any[]) {
    let sumPeriodos = 0;
    periodos.map((m: Periodo) => { sumPeriodos += this.getValuePeriodo(m); })
    return sumPeriodos;
  }

  private getMessageTiempo(tiempo:number): string {
    debugger
    let aniosEnteros = Math.floor(tiempo);
    let mesesDecimales = (tiempo - aniosEnteros) * 12;
    let mesesEnteros = Math.floor(mesesDecimales);
    let diasDecimales = (mesesDecimales - mesesEnteros) * 30;
    let diasEnteros = Math.round(diasDecimales);
    return `${tiempo} esto equivale a ${aniosEnteros} año, ${mesesEnteros} meses y ${diasEnteros} dias`
  }

}