import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactoAutoridad } from '../../../models/Contacto_Autoridades';
import { ContactoAutoridadService } from '../../../services/Contacto_Autoridades.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditacontactoautoridad',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './creaeditacontacto-autoridades.component.html',
  styleUrls: ['./creaeditacontacto-autoridades.component.css'],
})
export class CreaEditaContactoAutoridadComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  contacto: ContactoAutoridad = new ContactoAutoridad();

  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private cAS: ContactoAutoridadService,
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
      hIdContacAuto: [{ value: '', disabled: this.edicion }],
      hnombre_contac_Auto: ['', Validators.required],
      hnumeTelefono_contac_Auto: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.contacto.IdContacAuto = this.form.value.hIdContacAuto;
      this.contacto.nombre_contac_Auto = this.form.value.hnombre_contac_Auto;
      this.contacto.numeTelefono_contac_Auto = this.form.value.hnumeTelefono_contac_Auto;

      if (this.edicion) {
        this.cAS.update(this.contacto).subscribe(() => {
          this.cAS.list().subscribe(data => {
            this.cAS.setList(data);
          });
        });
      } else {
        this.cAS.insert(this.contacto).subscribe(() => {
          this.cAS.list().subscribe(data => {
            this.cAS.setList(data);
          });
        });
      }
      this.router.navigate(['contacto-autoridad']);
    }
  }

  init() {
    if (this.edicion) {
      this.cAS.listId(this.id).subscribe((data) => {
        this.form.setValue({
          hIdContacAuto: data.IdContacAuto,
          hnombre_contac_Auto: data.nombre_contac_Auto,
          hnumeTelefono_contac_Auto: data.numeTelefono_contac_Auto,
        });
      });
    }
  }
}
