import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './listaruser.component.html',
  styleUrls: ['./listaruser.component.css']
})
export class ListaruserComponent implements OnInit {
  // Declaramos la dataSource para la tabla
  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  
  // Declaramos las columnas que vamos a mostrar en la tabla
  displayedColumns: string[] = [ 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10'
  ];

  // Constructor con el servicio de usuarios inyectado
  constructor(private dS: UserService) {}

  // Método que se ejecuta después del constructor
  ngOnInit(): void {
    this.dS.list().subscribe(data => {
      // Cargamos los datos de usuarios en la tabla
      this.dataSource = new MatTableDataSource(data);
      // Agregamos la propiedad showPassword a cada usuario para controlar la visibilidad
      this.dataSource.data.forEach(user => user.showPassword = false);
    });
    this.dS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource;
    });
  }
  
  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility(user: Users): void {
    user.showPassword = !user.showPassword;
  }  
}
