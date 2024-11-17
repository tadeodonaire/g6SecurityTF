import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Distrito } from '../../../models/Distrito';
import { Ubicacion } from '../../../models/Ubicacion';
import { DistritoService } from '../../../services/distrito.service';
import { UbicacionService } from '../../../services/ubicacion.service';
import { Router, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-creaeditaubicacion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule,MatInputModule,MatDatepickerModule,MatSelectModule,MatButtonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './creaeditaubicacion.component.html',
  styleUrl: './creaeditaubicacion.component.css'
})
export class CreaeditaubicacionComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  listaDistrito: Distrito[] = [];
  ubi: Ubicacion = new Ubicacion();

  constructor(
    private formBuilder: FormBuilder,
    private diS: DistritoService,
    private uS: UbicacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hlongitud: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hfecha: ['', Validators.required],
      hdistrito: ['', Validators.required],
    });
    this.diS.list().subscribe((data) => {
      this.listaDistrito = data;
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.ubi.longitud = this.form.value.hlongitud;
      this.ubi.latitud = this.form.value.hlatitud;
      this.ubi.fechaUbicacion = this.form.value.hfecha;
      this.ubi.distrito.idDistrito = this.form.value.hdistrito;

      this.uS.insert(this.ubi).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
      this.router.navigate(['ubicaciones']);
    }
  }
}
