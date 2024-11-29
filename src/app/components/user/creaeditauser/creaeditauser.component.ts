import {
  Component,
  signal,
  OnInit,
  ChangeDetectionStrategy,
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
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { merge } from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import * as bcrypt from 'bcryptjs'; // Importar bcrypt

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
    CommonModule, RouterModule
  ],
  templateUrl: './creaeditauser.component.html',
  styleUrls: ['./creaeditauser.component.css'],
})
export class CreaeditauserComponent implements OnInit {
  fechaActual: Date = new Date();
  fechaMinimaNacimiento: Date = new Date(this.fechaActual.getFullYear() - 18, this.fechaActual.getMonth(), this.fechaActual.getDate());
  form: FormGroup = new FormGroup({});
  user: Users = new Users();
  errorMessage = signal('');
  hide = signal(true);
  id: number = 0;
  edicion: boolean = false;
  hashedToken: string = ''; // Declaración de hashedToken
  readonly email = new FormControl('', [Validators.required, Validators.email]); // Email con validación
  

  constructor(
    private formBuilder: FormBuilder,
    private uS: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = this.id != null;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', [Validators.required]],
      hapellido: ['', [Validators.required]],
      hcelular: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^\d+$/)]],
      hdni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(/^\d+$/)]],
      hfecha: ['', [Validators.required]],
      hemail: this.email, // Email control already configured
      husuario: ['', [Validators.required]],
      hcontrasena: ['', [Validators.required]],
    });    
  }

  /**
   * Actualiza el mensaje de error del campo email.
   */
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('Ingresar un correo');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Correo no válido');
    } else {
      this.errorMessage.set('');
    }
  }

  /**
   * Cambia la visibilidad de la contraseña.
   */
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  /**
   * Procesa el formulario al enviarlo.
   */
  aceptar() {
    if (this.form.valid) {
      const password = this.form.value.hcontrasena;
  
      this.hashPassword(password).then((hashedPassword) => {
        this.user.idUsario = this.form.value.hcodigo;
        this.user.us_nombre = this.form.value.hnombre;
        this.user.us_apellido = this.form.value.hapellido;
        this.user.us_telefono = this.form.value.hcelular;
        this.user.us_dni = this.form.value.hdni;
        this.user.us_fechanacimiento = this.form.value.hfecha;
        this.user.us_email = this.form.value.hemail;
        this.user.username = this.form.value.husuario;
        this.user.password = hashedPassword; // Contraseña encriptada
  
        if (this.edicion) {
          this.uS.update(this.user).subscribe((data) => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        } else {
          this.uS.insert(this.user).subscribe((data) => {
            this.uS.list().subscribe((data) => {
              this.uS.setList(data);
            });
          });
        }
  
        this.router.navigate(['usuarios']);
      });
    } else {
      this.form.markAllAsTouched();
      alert('Complete los campos faltantes');
    }
  }
  

  /**
   * Inicializa el formulario si está en modo edición.
   */
  init() {
    if (this.edicion) {
      this.uS.listId(this.id).subscribe((data) => {
        this.form = this.formBuilder.group({
          hcodigo: [data.idUsario],
          hnombre: [data.us_nombre],
          hapellido: [data.us_apellido],
          hcelular: [data.us_telefono],
          hdni: [data.us_dni],
          hfecha: [data.us_fechanacimiento],
          hemail: [data.us_email], // Mantener el control de correo electrónico
          husuario: [data.username],
          hcontrasena: [data.password],
        });
      });
    }
  }

  /**
   * Genera el hash de la contraseña en el evento de cambio.
   */
  generateTokenOnPasswordChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const password = input.value;

    if (/[a-zA-Z]/.test(password)) {
      this.hashPassword(password).then((hashed) => {
        this.hashedToken = hashed;
        console.log('Token Hasheado Generado:', this.hashedToken);
      });
    }
  }

  /**
   * Hashea una contraseña utilizando bcrypt.
   */
  private async hashPassword(input: string): Promise<string> {
    const saltRounds = 10;
    return bcrypt.hash(input, saltRounds);
  }
}