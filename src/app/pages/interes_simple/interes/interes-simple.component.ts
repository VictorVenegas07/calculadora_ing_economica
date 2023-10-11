import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InteresSimpleServiceService } from 'src/app/services/interes-simple-service.service';

@Component({
  selector: 'app-interes-simple',
  templateUrl: './interes-simple.component.html',
  styleUrls: ['./interes-simple.component.scss']
})
export class InteresSimpleComponent implements OnInit {

  intervalosTiempo = [
    { value: 'dias', label: 'Días', selected: false },
    { value: 'meses', label: 'Meses', selected: false },
    { value: 'anos', label: 'Años', selected: false },
  ];
  interesTotalCalculado = '';
  formGroup!: FormGroup;
  opcion: boolean = false;
  title: string = "Interes simple";

  labelCampo1: string = "campo";
  labelCampo2: string = "campo";
  activarCampoTiempo: boolean = true;
  simbolo: string  = '$';




  constructor(
    private fb: FormBuilder,
    private interesSimple: InteresSimpleServiceService,
    private route: ActivatedRoute
  ) {
    this.buildForms();
    this.configInitial();
  }

  private buildForms() {
    this.formGroup = this.fb.group(
      {
        periodos: this.fb.array([]),
        capital: new FormControl('', Validators.required),
        tasaInteres: new FormControl('', Validators.required),
        interes: new FormControl('', [Validators.required])
      });
    this.agregarNuevoCampo()

  }

  private configInitial() {

    this.route.paramMap.subscribe(params => {
      this.opcion = params.has('id');
      if (this.opcion) {
        this.setCampos();
      }
    });
  }
  private setCampos() {
    this.buildForms();
    this.simbolo = "$"
  }


  ngOnInit(): void {
  }

  get periodos(): FormArray {
    return this.formGroup.get("periodos") as FormArray
  }

  newPeriodo(): FormGroup {
    return this.fb.group({
      periodo: ['', Validators.required],
      valor: ['', Validators.required],
    })
  }

  campoTieneError(campo: string): boolean {
    const control = this.formGroup.get(campo);
    return control?.invalid && control?.touched || false;
  }

  campoTieneErrorArray(campo: string, index: number): boolean {
    const control = this.periodos.controls[index].get(campo);
    return control?.invalid && control?.touched || false;
  }

  agregarNuevoCampo(){
    this.formGroup.addControl('interes', new FormControl('', [Validators.required, Validators.min(4)]));
  }
  agregarPeriodo() {
    if (this.formGroup.value.periodos.length <= 2) {
      this.periodos.push(this.newPeriodo());
      this.actualizarIntervalosDisponibles();
    }
  }
  eliminarPeriodo(index: number) {
    this.periodos.removeAt(index);
    this.actualizarIntervalosDisponibles();
  }
  actualizarIntervalosDisponibles() {
    const intervalosSeleccionados = this.periodos.controls?.map((formGroup_: any) => formGroup_.controls.periodo.value)
    this.intervalosTiempo.forEach((intervalo) => {
      intervalo.selected = intervalosSeleccionados.includes(intervalo.value);
    });
  }
  calcularInteres() {
    //if (this.formGroup?.valid) {
    if (true) {
      this.interesTotalCalculado = this.interesSimple.calcularInteresSimple_(this.formGroup.value)
    } else {
      this.interesSimple.alertErrorMessage("Hay un campo vacio")
    }
  }
}
