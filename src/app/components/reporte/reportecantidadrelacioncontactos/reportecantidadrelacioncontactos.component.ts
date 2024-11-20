import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-reportecantidadrelacioncontactos',
  standalone: true,
  imports: [MatTableModule,RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './reportecantidadrelacioncontactos.component.html',
  styleUrl: './reportecantidadrelacioncontactos.component.css'
})
export class ReportecantidadrelacioncontactosComponent {
  relacion_contacto: String = '';
  constructor(private router:Router) {}

  verReporte(): void {
  if (this.relacion_contacto) {
    console.log('Relación de contacto ingresada:', this.relacion_contacto); // Log para depuración
    this.router.navigate(['/reportes/cantidadRelacionContacto'], {
      queryParams: { relacion_contacto: this.relacion_contacto },
    });
  } else {
    console.error('No se ingresó una relación de contacto.');
  }
}

}
