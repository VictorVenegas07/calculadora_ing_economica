import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradienteService {

  constructor() { }

  calcularGradiente(datos: any) {
    console.log(datos);
    var { primeraCuota, valor,
      tasa, numeroPagos, gradiente, tipo_1, tipo_2, caducidad } = datos;
        //Creciente-aritmetico-Valorpresente-vencida
    if (tipo_2 === "creciente" && tipo_1 === "aritmetico" && valor === "valorPresente" && datos.caducidad === "vencida") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / (tasa * Math.pow((1 + tasa), numeroPagos))) + (gradiente / tasa) *
        (((Math.pow((1 + tasa), numeroPagos) - 1) / (tasa * Math.pow((1 + tasa), numeroPagos)))
          - (numeroPagos / Math.pow((1 + tasa), numeroPagos)));

    }
    //2-vencida
    if (tipo_2 === "decreciente" && tipo_1 === "aritmetico" && valor === "valorPresente" && datos.caducidad === "vencida") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / (tasa * Math.pow((1 + tasa), numeroPagos))) - (gradiente / tasa) *
        (((Math.pow((1 + tasa), numeroPagos) - 1) / (tasa * Math.pow((1 + tasa), numeroPagos)))
          - (numeroPagos / Math.pow((1 + tasa), numeroPagos)));
    }

    //1-anticipado
    if (tipo_2 === "creciente" && tipo_1 === "aritmetico" && valor === "valorPresente" && datos.caducidad === "anticipado") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / (tasa * Math.pow((1 + tasa), (numeroPagos -1)))) + (gradiente / tasa) *
        (((Math.pow((1 + tasa), numeroPagos) - 1) / (tasa * Math.pow((1 + tasa), (numeroPagos-1))))
          - (numeroPagos / Math.pow((1 + tasa), (numeroPagos-1))));

    }
    //2-anticipado
    if (tipo_2 === "decreciente" && tipo_1 === "aritmetico" && valor === "valorPresente" && datos.caducidad === "anticipado") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / (tasa * Math.pow((1 + tasa), (numeroPagos-1)))) - (gradiente / tasa) *
        (((Math.pow((1 + tasa), numeroPagos) - 1) / (tasa * Math.pow((1 + tasa), (numeroPagos-1))))
          - (numeroPagos / Math.pow((1 + tasa), (numeroPagos-1))));
    }

    //3
    if (tipo_2 === "creciente" && tipo_1 === "aritmetico" && valor === "valorFuturo"
      && caducidad === "anticipado") {

      datos.total = (primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / tasa) + (gradiente / tasa) * (((Math.pow((1 + tasa), numeroPagos) - 1) / tasa)
          - numeroPagos)) * (1 + tasa);

    }
    //4
    if (tipo_2 === "decreciente" && tipo_1 === "aritmetico" && valor === "valorFuturo"
      && caducidad === "anticipado") {

      datos.total = (primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / tasa) - (gradiente / tasa) * (((Math.pow((1 + tasa), numeroPagos) - 1) / tasa)
          - numeroPagos)) * (1 + tasa);
    }
    ///5
    if (tipo_2 === "creciente" && tipo_1 === "aritmetico" && valor === "valorFuturo"
      && caducidad === "vencida") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / tasa) + (gradiente / tasa) * (((Math.pow((1 + tasa), numeroPagos) - 1) / tasa)
          - numeroPagos);
    }
    //6
    if (tipo_2 === "decreciente" && tipo_1 === "aritmetico" && valor === "valorFuturo"
      && caducidad === "vencida") {

      datos.total = primeraCuota * ((Math.pow((1 + tasa), numeroPagos) - 1)
        / tasa) - (gradiente / tasa) * (((Math.pow((1 + tasa), numeroPagos) - 1) / tasa)
          - numeroPagos);
    }

    if (tipo_2 === "creciente" && tipo_1 === "aritmetico" && valor === "valorInfinito"){
        datos.total = (primeraCuota / tasa ) + (gradiente/Math.pow(tasa, 2))
    }

    if (tipo_2 === "decreciente" && tipo_1 === "aritmetico" && valor === "valorInfinito"){
      datos.total = (primeraCuota / tasa ) - (gradiente/Math.pow(tasa, 2))
    }
    console.log(datos.total)
    return datos;
  }
}
