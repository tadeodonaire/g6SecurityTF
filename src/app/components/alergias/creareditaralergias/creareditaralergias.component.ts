import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators, } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Alergias } from '../../../models/Alergias';
import { AlergiasService } from '../../../services/alergia.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-creareditaralergias',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './creareditaralergias.component.html',
  styleUrl: './creareditaralergias.component.css'
})
export class CreareditaralergiasComponent implements OnInit{
  form: FormGroup =  new FormGroup({});
  alergia: Alergias=new Alergias();

  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private aS: AlergiasService,
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
      hcodigo: [''],
      hnombre: ['', Validators.required],
      hdescripcion: ['', Validators.required],
      hcausas: ['', Validators.required],
    });
  }
  Registrar() {
    if (this.form.valid) {
      this.alergia.idAlergias = this.form.value.hcodigo;
      this.alergia.nombre_alergias = this.form.value.hnombre;
      this.alergia.descripcion_alergias = this.form.value.hdescripcion;
      this.alergia.causa_alergias = this.form.value.hcausas;

      if (this.edicion) {
        //update
        this.aS.update(this.alergia).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      } else {
        this.aS.insert(this.alergia).subscribe((data) => {
          this.aS.list().subscribe((data) => {
            this.aS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['alergias']);
  }

  init() {
    if (this.edicion) {
      this.aS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idAlergias),
          hnombre: new FormControl(data.nombre_alergias),
          hdescripcion: new FormControl(data.descripcion_alergias),
          hcausas: new FormControl(data.causa_alergias),
        });
      });
    }
  }
}
