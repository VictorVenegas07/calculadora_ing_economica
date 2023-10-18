import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GradienteModels } from 'src/app/models/gradiente';
import { TasaRetornoModel } from 'src/app/models/tasaRetorno';
import { GradienteService } from 'src/app/services/gradiente.service';
import { TasaInteresRetornoService } from 'src/app/services/tasa-interes-retorno.service';

@Component({
  selector: 'app-tasa-interes-retorno',
  templateUrl: './tasa-interes-retorno.component.html',
  styleUrls: ['./tasa-interes-retorno.component.scss']
})
export class TasaInteresRetornoComponent {
  periodos = [{label:'Primer periodo', Value : 1}, {label:'Segundo periodo', Value: 2}]
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
        valorPeriodo: new FormControl(0, Validators.required),
        primerDinero: new FormControl(0, [Validators.required]),
        segundoDinero: new FormControl(0, Validators.required),
        inversionInicial: new FormControl(0, [Validators.required]),
        TRI: new FormControl(0, [Validators.required]),
        x1: new FormControl(0, [Validators.required]),
        x2: new FormControl(0, [Validators.required]),
      });
  }
  campoTieneError(campo: string): boolean {
    const control = this.formGroup.get(campo);
    return control?.invalid && control?.touched || false;
  }
  calcularGradiente (){
    let TIR = TasaRetornoModel.DesdeObjeto(this.formGroup.value);
    this.service.CalcularTIR(TIR);
    this.interesTotalCalculado = TIR.TRI.toString();
  }
  deshabilitarCampos(){
    (this.formGroup.get('valorPeriodo')?.value == 1)
      ?this.formGroup.get('segundoDinero')?.disable()
      :this.formGroup.get('segundoDinero')?.enable();
  }
}
