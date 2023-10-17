import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GradienteModels } from 'src/app/models/gradiente';
import { GradienteService } from 'src/app/services/gradiente.service';
import { TasaInteresRetornoService } from 'src/app/services/tasa-interes-retorno.service';

@Component({
  selector: 'app-tasa-interes-retorno',
  templateUrl: './tasa-interes-retorno.component.html',
  styleUrls: ['./tasa-interes-retorno.component.scss']
})
export class TasaInteresRetornoComponent {
  tipoGradiente = ['Aritmetico', 'Geometrico']
  claseGradiente = ['Creciente', 'Decreciente']

  tipoValor = [
    {value:'presente', label: 'Presente'},
    {value:'futuro', label: 'Futuro'},
    {value:'infinito', label: 'Infinito'},
    {value:'primerCuota', label: 'Primera Cuota'}

  ]
  tipoCaducidad = [
    {value:'anticipado', label: 'Anticipado'},
    {value:'vencido', label: 'Vencida'},
  ]

  interesTotalCalculado = '';
  formGroup!: FormGroup;
  opcion: boolean = false;
  title: string = "Interes simple";
  
  activarCampoTiempo: boolean = true;
  

  /**
   *
   */
  constructor(private fb: FormBuilder,
    private service: TasaInteresRetornoService,
    private route: ActivatedRoute) {
    this.buildForms();

  }
  private buildForms() {
    this.formGroup = this.fb.group(
      {
        valorPresente: new FormControl(0, Validators.required),
        tasInteres: new FormControl(0, [Validators.required]),
        primeraCuota: new FormControl(0, Validators.required),
        numeroPago: new FormControl(0, [Validators.required]),
        gradiente: new FormControl(0, [Validators.required]),
        tipoGradiente: new FormControl('', [Validators.required]),
        claseGradiente: new FormControl('', [Validators.required]),
        tipoValor: new FormControl('', Validators.required),
        tipoCaducidad: new FormControl('', [Validators.required]),
      });
  }
  campoTieneError(campo: string): boolean {
    const control = this.formGroup.get(campo);
    return control?.invalid && control?.touched || false;
  }
  calcularGradiente (){
    // console.log(this.formGroup.value);
    let gradiente = GradienteModels.GradienteDesdeObject(this.formGroup.value);
    // this.service.CalcularGradientee(gradiente);
    this.interesTotalCalculado = gradiente.valorPresente.toString();
  }
  deshabilitarCampos(){
    if(this.formGroup.get('tipoValor')?.value === 'infinito'){
      this.formGroup.get('tipoCaducidad')?.disable();
      this.formGroup.get('numeroPago')?.disable();
    }else{
      this.formGroup.get('tipoCaducidad')?.enable();
      this.formGroup.get('numeroPago')?.enable();
    }

  }

  deshabilitarCamposGeometrico(){
    (this.formGroup.get('tipoGradiente')?.value === 'Geometrico')
    ?this.formGroup.get('claseGradiente')?.disable()
    :this.formGroup.get('claseGradiente')?.enable();
    
  }

  
}
