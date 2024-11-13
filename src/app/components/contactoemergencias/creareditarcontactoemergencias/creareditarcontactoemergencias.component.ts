import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Contactoemergencias } from '../../../models/contactoemergencias';
import { ContactoemergenciasService } from '../../../services/contactoemergencias.service';
import { ActivatedRoute, Params , Router} from '@angular/router';

@Component({
  selector: 'app-creareditarcontactoemergencias',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  ReactiveFormsModule,
  CommonModule],
  templateUrl: './creareditarcontactoemergencias.component.html',
  styleUrl: './creareditarcontactoemergencias.component.css'
})
export class CreareditarcontactoemergenciasComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  contacto: Contactoemergencias = new Contactoemergencias();
  id: number = 0;
  edicion: boolean = false;
  relacion: string[] = ['Madre','Padre','Hermano','Conyuge','Hijo','Otros']

  constructor(
    private formBuilder: FormBuilder,
    private cES: ContactoemergenciasService,
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
      this.router.navigate(['contactosemergencias']);
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
