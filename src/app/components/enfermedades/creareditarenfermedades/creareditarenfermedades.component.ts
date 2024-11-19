import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Enfermedades } from '../../../models/Enfermedades';
import { EnfermedadesService } from '../../../services/enfermedades.service';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-creareditarenfermedades',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,RouterModule
  ],
  templateUrl: './creareditarenfermedades.component.html',
  styleUrl: './creareditarenfermedades.component.css'
})
export class CreareditarenfermedadesComponent implements  OnInit{
  form: FormGroup =  new FormGroup({});
  enfermedades: Enfermedades=new Enfermedades();

  id: number = 0;
  edicion: boolean = false;

  listaTipo: { value: string; viewValue: string } [] = [
    {value: 'Enfermedades cardiovasculares', viewValue: 'Enfermedades cardiovasculares'},
    {value: 'Cáncer', viewValue: 'Cáncer'},
    {value: 'Trastornos neonatales', viewValue: 'Trastornos neonatales'},
    {value: 'Trastornos musculoesqueléticos', viewValue: 'Trastornos musculoesqueléticos'},
    {value: ' Enfermedades mentales', viewValue: ' Enfermedades mentales'},
    {value: 'Abuso de sustancias', viewValue: 'Abuso de sustancias'},
    {value: 'Diabetes', viewValue: 'Diabetes'},
    {value: 'Lesiones no intencionadas', viewValue: 'Lesiones no intencionadas'},
    {value: ' Enfermedades respiratorias', viewValue: ' Enfermedades respiratorias'},
    {value: 'Trastornos neurológicos', viewValue: 'Trastornos neurológicos'},
    {value: 'Infecciones entéricas', viewValue: 'Infecciones entéricas'},
  ];

  constructor(
    private formBuilder: FormBuilder,
    private eS: EnfermedadesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      //data de la tabla para mostrarla
      this.init();
    });

    this.form = this.formBuilder.group({
      hidenfermedades: [''],
      hnombre: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      htipo: ['', Validators.required],
    });
  }
  Registrar() {
    if (this.form.valid) {
      this.enfermedades.idEnfermedades = this.form.value.hidenfermedades;
      this.enfermedades.nombre_enfermedad= this.form.value.hnombre;
      this.enfermedades.descripcion_enfermedad = this.form.value.hdescripcion;
      this.enfermedades.tipo_enfermedad = this.form.value.htipo;

      if (this.edicion) {
        //update
        this.eS.update(this.enfermedades).subscribe((data) => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      } else {
        this.eS.insert(this.enfermedades).subscribe((data) => {
          this.eS.list().subscribe((data) => {
            this.eS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['enfermedad']);
  }

  init() {
    if (this.edicion) {
      this.eS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hidenfermedades: new FormControl(data.idEnfermedades),
          hnombre: new FormControl(data.nombre_enfermedad),
          hdescripcion: new FormControl(data.descripcion_enfermedad),
          htipo: new FormControl(data.tipo_enfermedad),
        });
      });
    }
  }
}
