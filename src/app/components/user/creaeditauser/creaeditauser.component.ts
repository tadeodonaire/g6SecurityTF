import {
  Component,
  signal,
  OnInit,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creaeditauser',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    CommonModule,
  ],
  templateUrl: './creaeditauser.component.html',
  styleUrls: ['./creaeditauser.component.css'],
})
export class CreaeditauserComponent implements OnInit {
  // fecha maxima (hoy)
  fechaActual: Date = new Date();
  fechaMinimaNacimiento : Date = new Date();
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  errorMessage = signal('');
  hide = signal(true);
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private uS: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fechaMinimaNacimiento = new Date(
      this.fechaActual.getFullYear() - 18,
      this.fechaActual.getMonth(),
      this.fechaActual.getDate()
    );
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', Validators.required],
      hapellido: ['', Validators.required],
      hcelular: ['', Validators.required],
      hdni: ['', Validators.required],
      hfecha: ['', Validators.required,],
      hemail: ['', Validators.required],
      husuario: ['', Validators.required],
      hcontrasena: ['', Validators.required],
    });
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  aceptar() {
    if (this.form.valid) {
      this.user.idUsario = this.form.value.hcodigo;
      this.user.us_nombre = this.form.value.hnombre;
      this.user.us_apellido = this.form.value.hapellido;
      this.user.us_telefono = this.form.value.hcelular;
      this.user.us_dni = this.form.value.hdni;
      this.user.us_fechanacimiento = this.form.value.hfecha;
      this.user.us_email = this.form.value.hemail;
      this.user.username = this.form.value.husuario;
      this.user.password = this.form.value.hcontrasena;

      if (this.edicion) {
        this.uS.update(this.user).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.user).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }

      this.router.navigate(['usuarios']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idUsario),
          hnombre: new FormControl(data.us_nombre),
          hapellido: new FormControl(data.us_apellido),
          hcelular: new FormControl(data.us_telefono),
          hdni: new FormControl(data.us_dni),
          hfecha: new FormControl(data.us_fechanacimiento),
          hemail: new FormControl(data.us_email),
          husuario: new FormControl(data.username),
          hcontrasena: new FormControl(data.password),
        });
      });
    }
  }
}
