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
  disp: dispositivo = new dispositivo();

  constructor(
    private formBuilder: FormBuilder,
    private aS: ContactoautoridadesService,
    private eS: ContactoemergenciasService,
    private dp: DispositivoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hcontactoAutoridad: ['', Validators.required],
      hcontactoEmergencia: ['', Validators.required],
    });
    this.aS.list().subscribe((data) => {
      this.listaContactoAutoridad = data;
    });
    this.eS.list().subscribe((data) => {
      this.listaContactoEmergencias = data;
    });
  }
 
  aceptar(): void {
    if (this.form.valid) {
      this.disp.contacto_autoridades.idContacAuto = this.form.value.hcontactoAutoridad;
      this.disp.contactoemergencias.idContacto= this.form.value.hcontactoEmergencia;

      this.dp.insert(this.disp).subscribe((data) => {
        this.dp.list().subscribe((data) => {
          this.dp.setList(data);
        });
      });
      this.router.navigate(['dispositivo']);
    }
  }

}
