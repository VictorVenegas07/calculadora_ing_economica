export class TasaRetornoModel {
    constructor(
        public valorPeriodo: number,
        public primerDinero: number,
        public segundoDinero: number,
        public inversionInicial: number,
        public TRI: number,
        public x1: number,
        public x2: number,
    ) { }

    static DesdeObjeto(obj: any): TasaRetornoModel {
        return new TasaRetornoModel(
            obj.valorPeriodo,
            obj.primerDinero,
            obj.segundoDinero,
            obj.inversionInicial,
            obj.TRI,
            obj.x1,
            obj.x2,
        );
    }
    public CalcularPrimerPeriodo(){
        this.TRI = (this.primerDinero - this.inversionInicial)/this.inversionInicial;
    }

    public CalcularSegundoPeriodo(){

        this.x1 = (-this.primerDinero + Math.sqrt(Math.pow(this.primerDinero, 2)-4 * (-this.inversionInicial)* this.segundoDinero))/(2*(-this.inversionInicial))
        this.x2 = (-this.primerDinero - Math.sqrt(Math.pow(this.primerDinero, 2)-4 * (-this.inversionInicial)* this.segundoDinero))/(2*(-this.inversionInicial))
        
        this.TRI =  (this.x1 > this.x2)? this.x1-1:this.x2-1;
        
    }
}
