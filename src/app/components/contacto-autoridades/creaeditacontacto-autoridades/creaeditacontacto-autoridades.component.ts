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
import { Contacto_Autoridades } from '../../../models/Contacto_Autoridades';
import { ContactoAutoridadesService } from '../../../services/Contacto_Autoridades.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditacontacto-autoridades',
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
  templateUrl: './creaeditacontacto-autoridades.component.html',
  styleUrls: ['./creaeditacontacto-autoridades.component.css'],
})
export class CreaEditaContactoAutoridadesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  contacto: Contacto_Autoridades = new Contacto_Autoridades();

  id: number = 0;
  edicion: boolean = false;

  
  constructor(
    private formBuilder: FormBuilder,
    private cAS: ContactoAutoridadesService,
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
      hidContacAuto: [''],
      hnombre_contac_Auto: ['', Validators.required],
      hnumeTelefono_contac_Auto: ['', Validators.required],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.contacto.idContacAuto = this.form.value.hidContacAuto;
      this.contacto.nombre_contac_Auto = this.form.value.hnombre_contac_Auto;
      this.contacto.numeTelefono_contac_Auto = this.form.value.hnumeTelefono_contac_Auto;

      if (this.edicion) {
        this.cAS.update(this.contacto).subscribe(data => {
          this.cAS.list().subscribe((data) => {
            this.cAS.setList(data);
          });
        });
      } else {
        this.cAS.insert(this.contacto).subscribe((data) => {
          this.cAS.list().subscribe((data) => {
            this.cAS.setList(data);
          });
        });
      }
      this.router.navigate(['contacto-autoridades']);
    }
  }

  init() {
    if (this.edicion) {
      this.cAS.listId(this.id).subscribe((data) => {
        this.form= new FormGroup({
          hidContacAuto: new FormControl(data.idContacAuto),
          hnombre_contac_Auto: new FormControl(data.nombre_contac_Auto),
          hnumeTelefono_contac_Auto: new FormControl(data.numeTelefono_contac_Auto),
        });
      });
    }
  }
}
