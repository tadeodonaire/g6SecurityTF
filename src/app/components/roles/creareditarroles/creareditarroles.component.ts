import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RolesService } from '../../../services/roles.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Roles } from '../../../models/Roles';

@Component({
  selector: 'app-creareditarroles',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule
  ],
  templateUrl: './creareditarroles.component.html',
  styleUrl: './creareditarroles.component.css'
})
export class CreareditarrolesComponent implements OnInit{
  form: FormGroup =  new FormGroup({});
  roles: Roles = new Roles();

  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private rS: RolesService,
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
      hid: [''],
      hrol: ['', Validators.required],
      husuario: ['', Validators.required],
    });
  }
  Registrar() {
    if (this.form.valid) {
      this.roles.id = this.form.value.hid;
      this.roles.rol= this.form.value.hrol;
      this.roles.user.idUsario = this.form.value.husuario;

      if (this.edicion) {
        //update
        this.rS.update(this.roles).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.roles).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['roles']);
  }

  init() {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hid: new FormControl(data.id),
          hrol: new FormControl(data.rol),
          husuario: new FormControl(data.user.idUsario),
        });
      });
    }
  }
}
