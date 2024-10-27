import {
  Component,
  signal,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './creaeditauser.component.html',
  styleUrls: ['./creaeditauser.component.css'],
})

export class CreaeditauserComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  errorMessage = signal('');
  hide = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private uS: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      hnombre: ['', Validators.required],
      hapellido: ['', Validators.required],
      hcelular: ['', Validators.required],
      hdni: ['', Validators.required],
      hfecha: ['', Validators.required],
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
      this.user.IdUsario=this.form.value.hid;
      this.user.us_nombre = this.form.value.hnombre;
      this.user.us_apellido = this.form.value.hapellido;
      this.user.us_telefono = this.form.value.hcelular;
      this.user.us_dni = this.form.value.hdni;
      this.user.us_fechanacimiento = this.form.value.hfecha;
      this.user.us_email = this.form.value.hemail;
      this.user.username = this.form.value.husuario;
      this.user.password = this.form.value.hcontrasena;

      this.uS.insert(this.user).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });
    }
    this.router.navigate(['usuarios']);
  }
}
