import { Injectable } from '@angular/core';
import { GradienteModels } from '../models/gradiente';

@Injectable({
  providedIn: 'root'
})
export class GradienteService {

  constructor() { }

  CalcularGradientee(gradiente: GradienteModels) {
    debugger
    switch (true) {
      //Creciente-aritmetico-Valorpresente-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "vencido":
        gradiente.calcularAritmeticoCrecientePresenteVencido();
        break;

      //Decreciente-aritmetico-Valorpresente-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "vencido":
        gradiente.calcularAritmeticoDecrecientePresenteVencido();
        break;

      //Creciente-aritmetico-Valorpresente-Anticipado
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "anticipado":
        gradiente.calcularAritmeticoCrecientePresenteAnticipado();
        break;

      //Decreciente-aritmetico-Valorpresente-Anticipado
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "anticipado":
        gradiente.calcularAritmeticoDecrecientePresenteAnticipado();
        break;

      //Creciente-aritmetico-ValorFuturo-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "futuro" && gradiente.tipoCaducidad === "vencido":
        gradiente.calcularAritmeticoCrecienteFuturoVencido();
        break;

      //Decreciente-aritmetico-ValorFuturo-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "futuro" && gradiente.tipoCaducidad === "vencido":
        gradiente.calcularAritmeticoDecrecienteFuturoVencido();
        break;

      //Creciente-aritmetico-ValorFuturo-Anticipado
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "futuro" && gradiente.tipoCaducidad === "anticipado":
        gradiente.calcularAritmeticoCrecienteFuturoAnticipado();
        break;


      //Creciente-aritmetico-ValorInfinito
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "infinito":
        gradiente.calcularAritmeticoCrecienteInfinito();
        break;

      //Decreciente-aritmetico-ValorInfinito
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "infinito":
        gradiente.calcularAritmeticoDecrecienteInfinito();
        break;


      //PrimerCuota-aritmetico-creciente-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "vencido":
        gradiente.CalcularAritmeticoPrimerCuotaCrecienteVencido();
        break;

      //PrimerCuota-aritmetico-decreciente-vencida
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "vencido":
        gradiente.CalcularAritmeticoPrimerCuotaDecrecienteVencido();
        break;

      //PrimerCuota-aritmetico-creciente-anticipado
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Creciente"
        && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "anticipado":
        gradiente.CalcularAritmeticoPrimerCuotaCrecienteAnticipado();
        break;

      //PrimerCuota-aritmetico-decreciente-anticipado
      case gradiente.tipoGradiente === "Aritmetico" && gradiente.claseGradiente === "Decreciente"
        && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "anticipado":
        gradiente.CalcularAritmeticoPrimerCuotaDecrecienteAnticipado();
        break;

      //-----------------------------GEOMETRICO------------------------------------\\
      //valorPresente-vencida-geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "vencido":
        gradiente.calcularGeometricoVencido();
        break;
      //valorPresente-anticipado-geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "presente" && gradiente.tipoCaducidad === "anticipado":
        gradiente.calcularGeometricoAnticipado();
        break;

      //ValorFuturo-Vencida-Geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "futuro" && gradiente.tipoCaducidad === "vencido":
        gradiente.CalcularGrometricoValorFuturoVencido();
        break;

      //ValorFuturo-Anticipado-Geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "futuro" && gradiente.tipoCaducidad === "anticipado":
        gradiente.CalcularGrometricoValorFuturoAnticipado();
        break;

      //ValorInfinito-Geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "infinito":
        gradiente.CalcularGrometricoValorInfinito();
        break;

      //PrimeraCuota-vencido-Geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "vencido":
        gradiente.CalcularGrometricoPrimeraCuotaVencido();
        break;
      //PrimeraCuota-Anticipado-Geometrico
      case gradiente.tipoGradiente === "Geometrico" && gradiente.tipoValor === "primerCuota" && gradiente.tipoCaducidad === "anticipado":
        gradiente.CalcularGrometricoPrimeraCuotaAnticipado();
        break;
      default:
        break;

    }
    console.log(gradiente.valorPresente);

  }
}
