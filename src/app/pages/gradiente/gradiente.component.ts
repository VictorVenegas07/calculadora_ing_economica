import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GradienteModels } from 'src/app/models/gradiente';
import { GradienteService } from 'src/app/services/gradiente.service';

@Component({
  selector: 'app-gradiente',
  templateUrl: './gradiente.component.html',
  styleUrls: ['./gradiente.component.scss']
})
export class GradienteComponent {
  tipoGradiente = ['aritmetico', 'geometrico']
  claseGradiente = ['creciente', 'decreciente']

  tipoValor = [
    {value:'valorPresente', label: 'Presente'},
    {value:'valorFuturo', label: 'Futuro'},
    {value:'valorInfinito', label: 'Infinito'}
  ]
  tipoCaducidad = [
    {value:'anticipado', label: 'Anticipado'},
    {value:'vencida', label: 'Vencida'},
  ]

  interesTotalCalculado = '';
  formGroup!: FormGroup;
  opcion: boolean = false;
  title: string = "Interes simple";
  
  activarCampoTiempo: boolean = true;
  simbolo: string = '$';

  /**
   *
   */
  constructor(private fb: FormBuilder,
    private service: GradienteService,
    private route: ActivatedRoute) {
    this.buildForms();

  }
  // private buildForms() {
  //   this.formGroup = this.fb.group(
  //     {
  //       valorPresente: new FormControl('', Validators.required),
  //       tasInteres: new FormControl('', [Validators.required]),
  //       primeraCuota: new FormControl('', Validators.required),
  //       numeroPago: new FormControl('', [Validators.required]),
  //       gradiente: new FormControl('', [Validators.required]),
  //       tipoGradiente: new FormControl('', [Validators.required]),
  //       claseGradiente: new FormControl('', [Validators.required]),

  //     });
  // }
  private buildForms() {
    this.formGroup = this.fb.group(
      {
        valor: new FormControl('', Validators.required),
        caducidad: new FormControl('', [Validators.required]),
        primeraCuota: new FormControl('', Validators.required),
        tasa: new FormControl('', [Validators.required]),
        numeroPagos: new FormControl('', [Validators.required]),
        gradiente: new FormControl('', [Validators.required]),
        tipo_1: new FormControl('', [Validators.required]),
        tipo_2: new FormControl('', [Validators.required]),
        total: new FormControl('', [Validators.required]),

      });
  }
  campoTieneError(campo: string): boolean {
    const control = this.formGroup.get(campo);
    return control?.invalid && control?.touched || false;
  }
  calcularGradiente (){
    console.log(GradienteModels.GradienteDesdeObject(this.formGroup.value))
    this.service.calcularGradiente(this.formGroup.value)
  }
}
