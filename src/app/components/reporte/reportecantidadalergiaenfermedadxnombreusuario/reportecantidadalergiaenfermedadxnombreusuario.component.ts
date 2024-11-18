import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { UsuarioConteoAlerEnferDTO } from '../../../models/UsuarioConteoAlerEnferDTO';

@Component({
  selector: 'app-reportecantidadalergiaenfermedadxnombreusuario',
  standalone: true,
  imports: [MatTableModule,RouterModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './reportecantidadalergiaenfermedadxnombreusuario.component.html',
  styleUrl: './reportecantidadalergiaenfermedadxnombreusuario.component.css'
})
export class ReportecantidadalergiaenfermedadxnombreusuarioComponent {
  name: String = '';
  constructor(private router:Router) {}

  verReporte(): void {
    if (this.name) {
      this.router.navigate(['/reportes/CantidadAlerEnferXuser'],{
        queryParams: { name: this.name },});
    }
  }
}
