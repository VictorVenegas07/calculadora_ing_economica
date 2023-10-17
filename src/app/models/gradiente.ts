
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
            obj.tipoCaducidad,
            obj.tipoValor
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
        public tipoCaducidad: string,
        public tipoValor: string,
    ) { }

    //Creciente-aritmetico-Valorpresente-vencida
    public calcularAritmeticoCrecientePresenteVencido() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago))) + (this.gradiente / this.tasInteres) *
            (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago)))
                - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago)));
    }
    //Decreciente-aritmetico-Valorpresente-vencida
    public calcularAritmeticoDecrecientePresenteVencido() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago))) - (this.gradiente / this.tasInteres) *
            (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago)))
                - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago)));
    }
    //Creciente-aritmetico-Valorpresente-Anticipado
    public calcularAritmeticoCrecientePresenteAnticipado() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), (this.numeroPago - 1)))) + (this.gradiente / this.tasInteres) *
            (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), (this.numeroPago - 1))))
                - (this.numeroPago / Math.pow((1 + this.tasInteres), (this.numeroPago - 1))));

    }
    //Decreciente-aritmetico-Valorpresente-Anticipado
    public calcularAritmeticoDecrecientePresenteAnticipado() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), (this.numeroPago - 1)))) - (this.gradiente / this.tasInteres) *
            (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), (this.numeroPago - 1))))
                - (this.numeroPago / Math.pow((1 + this.tasInteres), (this.numeroPago - 1))));
    }
    //Creciente-aritmetico-ValorFuturo-vencida
    public calcularAritmeticoCrecienteFuturoVencido() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / this.tasInteres) + (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / this.tasInteres)
                - this.numeroPago);
    }
    //Decreciente-aritmetico-ValorFuturo-vencida
    public calcularAritmeticoDecrecienteFuturoVencido() {
        this.valorPresente = this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / this.tasInteres) - (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / this.tasInteres)
                - this.numeroPago);
    }
    //Creciente-aritmetico-ValorFuturo-Anticipado
    public calcularAritmeticoCrecienteFuturoAnticipado() {
        this.valorPresente = (this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / this.tasInteres) + (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / this.tasInteres)
                - this.numeroPago)) * (1 + this.tasInteres);
    }
    //Decreciente-aritmetico-ValorFuturo-Anticipado
    public calcularAritmeticoDecrecienteFuturoAniticipado() {
        this.valorPresente = (this.primeraCuota * ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / this.tasInteres) - (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / this.tasInteres)
                - this.numeroPago)) * (1 + this.tasInteres);
    }
    //Creciente-aritmetico-ValorInfinito
    public calcularAritmeticoCrecienteInfinito() {
        this.valorPresente = (this.primeraCuota / this.tasInteres) + (this.gradiente / Math.pow(this.tasInteres, 2))
    }
    //Decreciente-aritmetico-ValorInfinito
    public calcularAritmeticoDecrecienteInfinito() {
        this.valorPresente = (this.primeraCuota / this.tasInteres) - (this.gradiente / Math.pow(this.tasInteres, 2))
    }
    //PrimerCuota-aritmetico-creciente-vencida
    public CalcularAritmeticoPrimerCuotaCrecienteVencido() {
        this.valorPresente = (this.primeraCuota - (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago))) - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago)))) / ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago)));
    }
    //PrimerCuota-aritmetico-decreciente-vencida
    public CalcularAritmeticoPrimerCuotaDecrecienteVencido() {
        this.valorPresente = (this.primeraCuota + (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago))) - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago)))) / ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago)));
    }
    //PrimerCuota-aritmetico-creciente-anticipado
    public CalcularAritmeticoPrimerCuotaCrecienteAnticipado() {
        this.valorPresente = (this.primeraCuota - (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago - 1))) - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago - 1)))) / ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago - 1)));
    }
    //PrimerCuota-aritmetico-decreciente-anticipado
    public CalcularAritmeticoPrimerCuotaDecrecienteAnticipado() {
        this.valorPresente = (this.primeraCuota + (this.gradiente / this.tasInteres) * (((Math.pow((1 + this.tasInteres), this.numeroPago) - 1)
            / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago - 1))) - (this.numeroPago / Math.pow((1 + this.tasInteres), this.numeroPago - 1)))) / ((Math.pow((1 + this.tasInteres), this.numeroPago) - 1) / (this.tasInteres * Math.pow((1 + this.tasInteres), this.numeroPago - 1)));
    }
    //valorPresente-vencida-geometrico
    public calcularGeometricoVencido() {
        if (this.tasInteres === this.gradiente) {
            this.valorPresente = (this.numeroPago * this.primeraCuota) / (1 + this.tasInteres)
        } else {
            this.valorPresente = (this.primeraCuota * (Math.pow((1 + this.gradiente), this.numeroPago)
                * Math.pow((1 + this.tasInteres), -this.numeroPago) - 1)) / (this.gradiente - this.tasInteres);
        }

    }
    //valorPresente-anticipado-geometrico
    public calcularGeometricoAnticipado() { 
        if (this.tasInteres === this.gradiente) {
            this.valorPresente = this.numeroPago * this.primeraCuota;
          } else {
            this.valorPresente = (this.primeraCuota * (Math.pow((1 + this.gradiente), this.numeroPago)
              * Math.pow((1 + this.tasInteres), -this.numeroPago) - 1) * (1 + this.tasInteres)) / (this.gradiente - this.tasInteres);
          }
      
    }
    //ValorFuturo-Vencida-Geometrico
    public CalcularGrometricoValorFuturoVencido()    {
        if(this.tasInteres===this.gradiente){
            this.valorPresente = (this.numeroPago * this.primeraCuota * Math.pow((1+this.tasInteres),this.numeroPago))/(1+this.tasInteres);
          }else{
            this.valorPresente = (this.primeraCuota*(Math.pow((1+this.gradiente),this.numeroPago)
            -Math.pow((1+this.tasInteres),this.numeroPago)))/(this.gradiente-this.tasInteres);
          }
  
    }
    //ValorFuturo-Anticipado-Geometrico
    public CalcularGrometricoValorFuturoAnticipado()    {
        if(this.tasInteres===this.gradiente){
            this.valorPresente = (this.numeroPago * this.primeraCuota * Math.pow((1+this.tasInteres),this.numeroPago));
          }else{
            this.valorPresente = (this.primeraCuota*(Math.pow((1+this.gradiente),this.numeroPago)
            -Math.pow((1+this.tasInteres),this.numeroPago))*(1+this.tasInteres))/(this.gradiente-this.tasInteres);
          }
    }
    //ValorInfinito-Geometrico
    public CalcularGrometricoValorInfinito(){
        if(this.gradiente<this.tasInteres){
            this.valorPresente = this.primeraCuota / (this.tasInteres-this.gradiente);
          }
    }
    //PrimeraCuota-vencido-Geometrico
    public CalcularGrometricoPrimeraCuotaVencido()    {
        if(this.gradiente===this.tasInteres){
            this.valorPresente = (this.primeraCuota * (1+this.tasInteres))/this.numeroPago;
          }else{ 
            this.valorPresente = (this.primeraCuota * (this.gradiente-this.tasInteres) ) 
            / ((Math.pow((1+this.gradiente),this.numeroPago)*Math.pow((1+this.tasInteres),-this.numeroPago))-1);
          }
    }
     //PrimeraCuota-Anticipado-Geometrico
     public CalcularGrometricoPrimeraCuotaAnticipado()    {
        if(this.gradiente===this.tasInteres){
            this.valorPresente = this.primeraCuota/this.numeroPago;
          }else{
            this.valorPresente = (this.primeraCuota * (this.gradiente-this.tasInteres) ) 
            /( ((Math.pow((1+this.gradiente),this.numeroPago)*Math.pow((1+this.tasInteres),-this.numeroPago))-1)*(1+this.tasInteres));
          }
     }

}

