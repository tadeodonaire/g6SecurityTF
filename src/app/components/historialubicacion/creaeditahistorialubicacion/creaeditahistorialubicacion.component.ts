import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ubicacion } from '../../../models/Ubicacion';
import { dispositivo } from '../../../models/dispositivo';
import { Historialubicacion } from '../../../models/Historialubicacion';
import { UbicacionService } from '../../../services/ubicacion.service';
import { DispositivoService } from '../../../services/dispositivo.service';
import { HistorialubicacionService } from '../../../services/historialubicacion.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, provideNativeDateAdapter } from '@angular/material/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditahistorialubicacion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDatepickerModule,MatFormField,ReactiveFormsModule,MatInputModule,MatSelectModule,MatButtonModule, CommonModule,MatOptionModule],
  templateUrl: './creaeditahistorialubicacion.component.html',
  styleUrl: './creaeditahistorialubicacion.component.css'
})
export class CreaeditahistorialubicacionComponent {
// fecha maxima (hoy)
fechaActual: Date = new Date();
  form: FormGroup = new FormGroup({});
  listaLatitud: Ubicacion[] = [];
  listaDispositivos: dispositivo[] = [];
  hubicacion: Historialubicacion = new Historialubicacion();

  constructor(
    private formBuilder: FormBuilder, 
    private uS: UbicacionService, 
    private dS: DispositivoService, 
    private huS: HistorialubicacionService, 
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hfecha: ['', [Validators.required,this.fechaPasadaValidator.bind(this)]],
      hhora: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hdispositivo: ['', Validators.required]
    });
    this.uS.list().subscribe((data) => {
      this.listaLatitud = data;
    });
    this.dS.list().subscribe((data) => {
      this.listaDispositivos = data;
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.hubicacion.fecha = this.form.value.hfecha;
      this.hubicacion.hora = this.form.value.hhora;
      this.hubicacion.ubicacion.idUbicacion = this.form.value.hlatitud;
      this.hubicacion.dispositivo.idispositivo = this.form.value.hdispositivo;

      this.huS.insert(this.hubicacion).subscribe((data) => {
        this.huS.list().subscribe((data) => {
          this.huS.setList(data);
        });
      });
      this.router.navigate(['historialubicaciones']);
    }
  }

  fechaPasadaValidator(control: FormControl) {
    const fechaSeleccionada = new Date(control.value);
    const hoy = new Date();

    // Si la fecha seleccionada es posterior a hoy, marca como error
    if (fechaSeleccionada > hoy) {
      return { fechaInvalida: true };
    }
    return null;
  }

}
