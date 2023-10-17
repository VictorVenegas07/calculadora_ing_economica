


export const calculateValorPresente = (datos:any)=> {

 var { primeraCuota, valor,
      tasa, numeroPagos, gradiente, tipo_1, tipo_2, caducidad,valorNumber } = datos;
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

    if(valor==="primeraCuota" && tipo_1==="aritmetico" && tipo_2==="creciente" 
    && caducidad==="vencida"){

      datos.total = (valorNumber - (gradiente/tasa)*(((Math.pow((1+tasa),numeroPagos)-1)
      /(tasa*Math.pow((1+tasa),numeroPagos)))-(numeroPagos/Math.pow((1+tasa),numeroPagos))))
      /((Math.pow((1+tasa),numeroPagos)-1)/(tasa*Math.pow((1+tasa),numeroPagos)));
    }

    if(valor==="primeraCuota" && tipo_1==="aritmetico" && tipo_2==="decreciente" 
    && caducidad==="vencida"){

      datos.total = (valorNumber + (gradiente/tasa)*(((Math.pow((1+tasa),numeroPagos)-1)
      /(tasa*Math.pow((1+tasa),numeroPagos)))-(numeroPagos/Math.pow((1+tasa),numeroPagos))))
      /((Math.pow((1+tasa),numeroPagos)-1)/(tasa*Math.pow((1+tasa),numeroPagos)));
    }


    if(valor==="primeraCuota" && tipo_1==="aritmetico" && tipo_2==="creciente" 
    && caducidad==="anticipado"){

      datos.total = (valorNumber - (gradiente/tasa)*(((Math.pow((1+tasa),numeroPagos)-1)
      /(tasa*Math.pow((1+tasa),numeroPagos-1)))-(numeroPagos/Math.pow((1+tasa),numeroPagos-1))))
      /((Math.pow((1+tasa),numeroPagos)-1)/(tasa*Math.pow((1+tasa),numeroPagos-1)));
    }

    if(valor==="primeraCuota" && tipo_1==="aritmetico" && tipo_2==="decreciente" 
    && caducidad==="anticipado"){

      datos.total = (valorNumber + (gradiente/tasa)*(((Math.pow((1+tasa),numeroPagos)-1)
      /(tasa*Math.pow((1+tasa),numeroPagos-1)))-(numeroPagos/Math.pow((1+tasa),numeroPagos-1))))
      /((Math.pow((1+tasa),numeroPagos)-1)/(tasa*Math.pow((1+tasa),numeroPagos-1)));
    }

    if(valor==="valorPresente" && caducidad==="vencida" && tipo_1=="geometrico"){

      if(tasa===gradiente){
        datos.total = (numeroPagos*primeraCuota)/(1+tasa) 
      }else {

          datos.total = (primeraCuota*(Math.pow((1+gradiente),numeroPagos)
          *Math.pow((1+tasa),-numeroPagos)-1))/(gradiente-tasa);
      }

    }

    if(valor==="valorPresente" && caducidad==="anticipado" && tipo_1=="geometrico"){

      if(tasa===gradiente){
        datos.total = numeroPagos*primeraCuota;
      }else {

          datos.total = (primeraCuota*(Math.pow((1+gradiente),numeroPagos)
          *Math.pow((1+tasa),-numeroPagos)-1)*(1+tasa))/(gradiente-tasa);
      }

    }



    if(valor==="valorFuturo" && caducidad==="vencida" 
    && tipo_1==="geometrico"){


        if(tasa===gradiente){
          datos.total = (numeroPagos * primeraCuota * Math.pow((1+tasa),numeroPagos))/(1+tasa);

        }else{

          datos.total = (primeraCuota*(Math.pow((1+gradiente),numeroPagos)
          -Math.pow((1+tasa),numeroPagos)))/(gradiente-tasa);
        }

    }


    if(valor==="valorFuturo" && caducidad==="anticipado" 
    && tipo_1==="geometrico"){


        if(tasa===gradiente){

          datos.total = (numeroPagos * primeraCuota * Math.pow((1+tasa),numeroPagos));
          
        }else{

          datos.total = (primeraCuota*(Math.pow((1+gradiente),numeroPagos)
          -Math.pow((1+tasa),numeroPagos))*(1+tasa))/(gradiente-tasa);
        }

    }


    if(valor==="valorInfinito" && tipo_1==="geometrico"){

      console.log("valor infinito")
      if(gradiente<tasa){
        console.log("gradiente");
        datos.total = primeraCuota / (tasa-gradiente);
      }


    }

    if(valor==="primeraCuota" && caducidad==="vencida" && tipo_1==="geometrico"){

      if(gradiente===tasa){

        datos.total = (valorNumber * (1+tasa))/numeroPagos;
      }else{

        datos.total = (valorNumber * (gradiente-tasa) ) 
        / ((Math.pow((1+gradiente),numeroPagos)*Math.pow((1+tasa),-numeroPagos))-1);

      }

    }


    if(valor==="primeraCuota" && caducidad==="anticipado" && "geometrico"){

      if(gradiente===tasa){

        datos.total = valorNumber/numeroPagos;
      }else{

        datos.total = (valorNumber * (gradiente-tasa) ) 
        /( ((Math.pow((1+gradiente),numeroPagos)*Math.pow((1+tasa),-numeroPagos))-1)*(1+tasa));

      }

    }


      return datos;
}