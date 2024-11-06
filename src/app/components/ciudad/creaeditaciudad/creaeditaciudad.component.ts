import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Ciudad } from '../../../models/Ciudad';
import { CiudadService } from '../../../services/ciudad.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditaciudad',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './creaeditaciudad.component.html',
  styleUrl: './creaeditaciudad.component.css',
})
export class CreaeditaciudadComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  ciudad: Ciudad = new Ciudad();
  id: number = 0;
  edicion: boolean = false;

  listarCiudades: { value: string; viewValue: string }[] = [
    { value: 'Arequipa', viewValue: 'Arequipa' },
    { value: 'Lima', viewValue: 'Lima' },
    { value: 'Ica', viewValue: 'Ica' },
    { value: 'Tumbes', viewValue: 'Tumbes' },
    { value: 'Piura', viewValue: 'Piura' },
    { value: 'Lambayeque', viewValue: 'Lambayeque' },
    { value: 'La Libertad', viewValue: 'La Libertad' },
    { value: 'Ancash', viewValue: 'Ancash' },
    { value: 'Moquegua', viewValue: 'Moquegua' },
    { value: 'Tacna', viewValue: 'Tacna' },
    { value: 'Cajamarca', viewValue: 'Cajamarca' },
    { value: 'Amazonas', viewValue: 'Amazonas' },
    { value: 'Loreto', viewValue: 'Loreto' },
    { value: 'Ucayali', viewValue: 'Ucayali' },
    { value: 'Madre de Dios', viewValue: 'Madre de Dios' },
    { value: 'Puno', viewValue: 'Puno' },
    { value: 'Ayacucho', viewValue: 'Ayacucho' },
    { value: 'Apurímac', viewValue: 'Apurímac' },
    { value: 'Cusco', viewValue: 'Cusco' },
    { value: 'Huancavelica', viewValue: 'Huancavelica' },
    { value: 'Junín', viewValue: 'Junín' },
    { value: 'Pasco', viewValue: 'Pasco' },
    { value: 'Huánuco', viewValue: 'Huánuco' },
    { value: 'San Martin', viewValue: 'San Martin' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private cS: CiudadService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo1: [''],
      hciudad: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.ciudad.idCiudad = this.form.value.hcodigo;
      this.ciudad.nombre_ciudad = this.form.value.hciudad;

      if (this.edicion) {
        //update
        this.cS.update(this.ciudad).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.ciudad).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }

    } else {
      this.form.markAllAsTouched(); // Marcar todos los campos como tocados para mostrar mensajes de error
    }
    this.router.navigate(['Ciudad']);
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo1: new FormControl(data.idCiudad),
          hciudad: new FormControl(data.nombre_ciudad),
        });
      });
    }
  }
}