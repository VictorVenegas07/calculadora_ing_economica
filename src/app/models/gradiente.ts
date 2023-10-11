  
export class GradienteModels {
    
    static GradienteDesdeObject(obj: any) {
        return new GradienteModels(
            obj.valorPresente,
            obj.tasInteres,
            obj.primeraCuota,
            obj.numeroPago,
            obj.gradiente,
            obj.tipoGradiente,
            obj.claseGradiente,
        );
    }

    constructor(
        public valorPresente: number,
        public tasInteres: number,
        public primeraCuota: number,
        public numeroPago: number,
        public gradiente: number,
        public tipoGradiente: string,
        public claseGradiente: string,
    ) { }

    //Creciente-aritmetico-Valorpresente-vencida
    public calcularAritmeticoCrecientePresenteVencido(){
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
        / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago))) + (this.gradiente / this.tasInteres) *
        (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago)))
          - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago)));
    }
    //Decreciente-aritmetico-Valorpresente-vencida
    public calcularAritmeticoDecrecientePresenteVencido(){}
    //Creciente-aritmetico-Valorpresente-Anticipado
    public calcularAritmeticoCrecientePresenteAniticipado(){}
    //Decreciente-aritmetico-Valorpresente-Anticipado
    public calcularAritmeticoDecrecientePresenteAniticipado(){}

    //Creciente-aritmetico-ValorFuturo-vencida
    public calcularAritmeticoCrecienteFuturoVencido(){}
    //Decreciente-aritmetico-ValorFuturo-vencida
    public calcularAritmeticoDecrecienteFuturoVencido(){}
    //Creciente-aritmetico-ValorFuturo-Anticipado
    public calcularAritmeticoCrecienteFuturoAniticipado(){}
     //Decreciente-aritmetico-ValorFuturo-Anticipado
    public calcularAritmeticoDecrecienteFuturoAniticipado(){}
    
    //Creciente-aritmetico-ValorInfinito
    public calcularAritmeticoCrecienteInfinito(){}
    //Decreciente-aritmetico-ValorInfinito
    public calcularAritmeticoDecrecienteInfinito(){}

    public calcularAritmeticoDecreciente(){}
    public calcularGeometricoCreciente(){}
    public calcularGeometricoDecreciente(){}

}

