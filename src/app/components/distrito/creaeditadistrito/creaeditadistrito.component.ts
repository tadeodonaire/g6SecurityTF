import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Distrito } from '../../../models/Distrito';
import { Ciudad } from '../../../models/Ciudad';
import { CiudadService } from '../../../services/ciudad.service';
import { DistritoService } from '../../../services/distrito.service';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-creaeditadistrito',
  standalone: true,
  imports: [MatFormFieldModule,MatSelectModule,MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './creaeditadistrito.component.html',
  styleUrl: './creaeditadistrito.component.css'
})
export class CreaeditadistritoComponent implements OnInit{

  form:FormGroup = new FormGroup({});
  listaCiudades: Ciudad[] = [];
  distri: Distrito = new Distrito();

  constructor(private formBuilder: FormBuilder, private cS: CiudadService, private diS: DistritoService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hciudad: ['', Validators.required],
      hdistrito: ['', Validators.required]
    });
    this.cS.list().subscribe((data) => {
      this.listaCiudades = data;
    });
  }

  aceptar(): void {
    if (this.form.valid) {
      this.distri.nombre_Distrito = this.form.value.hdistrito;
      this.distri.ciudad.idCiudad = this.form.value.hciudad;

      this.diS.insert(this.distri).subscribe((data) => {
        this.diS.list().subscribe((data) => {
          this.diS.setList(data);
        });
      });
      this.router.navigate(['Distritos']);
    }
  }

}
