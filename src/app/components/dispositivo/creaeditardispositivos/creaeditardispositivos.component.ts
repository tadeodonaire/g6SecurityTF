import { Component, OnInit } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Contacto_Autoridades } from '../../../models/contactoautoridades';
import { Contactoemergencias } from '../../../models/contactoemergencias';
import { dispositivo } from '../../../models/dispositivo';
import { Router } from '@angular/router';
import { ContactoautoridadesService } from '../../../services/contactoautoridades.service';
import { ContactoemergenciasService } from '../../../services/contactoemergencias.service';
import { DispositivoService } from '../../../services/dispositivo.service';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-creaeditardispositivos',
  standalone: true,
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './creaeditardispositivos.component.html',
  styleUrl: './creaeditardispositivos.component.css'
})
export class CreaeditardispositivosComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  listaContactoAutoridad: Contacto_Autoridades[]=[];
  listaContactoEmergencias: Contactoemergencias[]=[];
  listaUsuarios: Users[]=[];
  disp: dispositivo = new dispositivo();

  listaDispositivos: { value: string; viewValue: string }[] = [
    { value: 'Smarwatch', viewValue: 'Smarwatch' },
    { value: 'Telefono', viewValue: 'Telefono' },

  ];

  constructor(
    private formBuilder: FormBuilder,
    private aS: ContactoautoridadesService,
    private eS: ContactoemergenciasService,
    private dS: DispositivoService,
    private uS: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hcontactoAutoridad: ['', Validators.required],
      hcontactoEmergencia: ['', Validators.required],
      husuario: ['', Validators.required],
      hmarca: ['', Validators.required],
  
    });
    this.aS.list().subscribe((data) => {
      this.listaContactoAutoridad = data;
    });
    this.eS.list().subscribe((data) => {
      this.listaContactoEmergencias = data;
    });
    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });
  }
 
  aceptar(): void {
    if (this.form.valid) {
      this.disp.contactoAutoridades.idContacAuto = this.form.value.hcontactoAutoridad;
      this.disp.contactoEmergencia.idContacto= this.form.value.hcontactoEmergencia;
      this.disp.us.idUsario = this.form.value.husuario;
      this.disp.nombre_dispositivo = this.form.value.hmarca;

      this.dS.insert(this.disp).subscribe((data) => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data);
        });
      });
      this.router.navigate(['dispositivo']);
    }
  }
}
