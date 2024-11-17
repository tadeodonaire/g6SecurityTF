import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { UserService } from '../../../../services/user.service';
import { UsuarioConteoAlerEnferDTO } from '../../../../models/UsuarioConteoAlerEnferDTO';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listareportepornombreusuario',
  standalone: true,
  imports: [MatTableModule, MatCardModule ],
  templateUrl: './listareportepornombreusuario.component.html',
  styleUrl: './listareportepornombreusuario.component.css'
})
export class ListareportepornombreusuarioComponent implements OnInit{
  
  constructor(private uS: UserService, private route: ActivatedRoute) {}
  displayedColumns: string[] = ['Usuario', 'Alergias', 'Enfermedades', 'T_E'];
  dataSource: MatTableDataSource<UsuarioConteoAlerEnferDTO> = new MatTableDataSource();
  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const name = params['name']; // Captura el parámetro "name" del query
      if (name) {
        console.log('Nombre recibido en el query parameter:', name); // Para verificar
        this.uS.getCantidadAlergiaEnfermedadxNomUsuario(name).subscribe((data) => {
          this.dataSource = new MatTableDataSource(data);
        });
      } else {
        console.error('El parámetro "name" no fue proporcionado.');
      }
    });
  }
}