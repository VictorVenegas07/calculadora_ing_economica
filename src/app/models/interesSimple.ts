export interface Periodo {
    periodo: string;
    valor: number;
  }
  
  export interface IntereSimple {
    periodos: Periodo[];
    capital: number;
    tasaInteres: number;
    interes: number;
  }
  
  