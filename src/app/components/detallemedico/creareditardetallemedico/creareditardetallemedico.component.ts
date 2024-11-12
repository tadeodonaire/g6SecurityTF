import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Historialclinico } from '../../../models/historialclinico';
import { Detallemedico } from '../../../models/detallemedico';
import { HistorialclinicoService } from '../../../services/historialclinico.service';
import { DetallemedicoService } from '../../../services/detallemedico.service';
import { Router } from '@angular/router';
import { Alergias } from '../../../models/Alergias';
import { AlergiasService } from '../../../services/alergia.service';

@Component({
  selector: 'app-creareditardetallemedico',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './creareditardetallemedico.component.html',
  styleUrl: './creareditardetallemedico.component.css'
})
export class CreareditardetallemedicoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaHistorialClinico: Historialclinico[] = [];
  listaAlergias: Alergias[] = [];
  maint: Detallemedico = new Detallemedico();
  

  constructor(
    private formBuilder: FormBuilder,
    private uS: HistorialclinicoService,
    private aS: AlergiasService,
    private hcS: DetallemedicoService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      halergia: ['', Validators.required],
      hhistoriaClinica: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listaHistorialClinico = data;
    });
    this.aS.list().subscribe((data) => {
      this.listaAlergias = data;
    });
  }
 
  aceptar(): void {
    if (this.form.valid) {
      this.maint.alergias.idAlergias = this.form.value.halergia;
      this.maint.historialClinico.idHistorialClinico = this.form.value.hhistoriaClinica;

      this.hcS.insert(this.maint).subscribe((data) => {
        this.hcS.list().subscribe((data) => {
          this.hcS.setList(data);
        });
      });
      this.router.navigate(['detalleMedico']);
    }
  }
}
