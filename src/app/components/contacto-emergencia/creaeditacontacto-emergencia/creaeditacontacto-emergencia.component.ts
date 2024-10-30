import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contacto_Emergencia } from '../../../models/Contacto_Emergencia';
import { ContactoEmergenciaService } from '../../../services/Contacto_Emergencia.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditacontacto-emergencia',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './creaeditacontacto-emergencia.component.html',
  styleUrls: ['./creaeditacontacto-emergencia.component.css'],
})
export class CreaEditaContactoEmergenciaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  contacto: Contacto_Emergencia = new Contacto_Emergencia();

  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cES: ContactoEmergenciaService,
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
      hidContacto: [''],
      hnombre_contacto: ['', Validators.required],
      hrelacion_contacto: ['', Validators.required],
      hnum_telefono_contacto: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.contacto.idContacto = this.form.value.hidContacto;
      this.contacto.nombre_contacto = this.form.value.hnombre_contacto;
      this.contacto.relacion_contacto = this.form.value.hrelacion_contacto;
      this.contacto.num_telefono_contacto = this.form.value.hnum_telefono_contacto;

      if (this.edicion) {
        this.cES.update(this.contacto).subscribe(data => {
          this.cES.list().subscribe((data) => {
            this.cES.setList(data);
          });
        });
      } else {
        this.cES.insert(this.contacto).subscribe((data) => {
          this.cES.list().subscribe((data) => {
            this.cES.setList(data);
          });
        });
      }
      this.router.navigate(['contacto-emergencia']);
    }
  }

  init() {
    if (this.edicion) {
      this.cES.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hidContacto: new FormControl(data.idContacto),
          hnombre_contacto: new FormControl(data.nombre_contacto),
          hrelacion_contacto: new FormControl(data.relacion_contacto),
          hnum_telefono_contacto: new FormControl(data.num_telefono_contacto),
        });
      });
    }
  }
}
