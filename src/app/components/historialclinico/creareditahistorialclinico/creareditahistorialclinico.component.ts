import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Historialclinico } from '../../../models/historialclinico';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';
import { HistorialclinicoService } from '../../../services/historialclinico.service';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-creareditahistorialclinico',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './creareditahistorialclinico.component.html',
  styleUrl: './creareditahistorialclinico.component.css'
})
export class CreareditahistorialclinicoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaUsuarios: Users[] = [];
  maint: Historialclinico = new Historialclinico();
  constructor(
    private formBuilder: FormBuilder,
    private uS: UserService,
    private hcS: HistorialclinicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hseguroMed: ['', Validators.required],
      husuarios: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
 
  aceptar(): void {
    if (this.form.valid) {
      this.maint.seguroMed = this.form.value.hseguroMed;
      this.maint.users.idUsario = this.form.value.husuarios;

      this.hcS.insert(this.maint).subscribe((data) => {
        this.hcS.list().subscribe((data) => {
          this.hcS.setList(data);
        });
      });
      this.router.navigate(['historialClinico']);
    }
  }
    
}
