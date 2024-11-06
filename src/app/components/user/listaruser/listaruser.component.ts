import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Users } from '../../../models/Users';
import { UserService } from '../../../services/user.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listaruser',
  standalone: true,
  imports: [MatTableModule,MatIconModule,CommonModule,RouterLink,MatPaginator],
  templateUrl: './listaruser.component.html',
  styleUrls: ['./listaruser.component.css']
})
export class ListaruserComponent implements OnInit {
  // Declaramos la dataSource para la tabla
  dataSource: MatTableDataSource<Users> = new MatTableDataSource();
  
  // Declaramos las columnas que vamos a mostrar en la tabla
  displayedColumns: string[] = [ 'c1','c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8','accion01','accion02'
  ];



  // Constructor con el servicio de usuarios inyectado
  constructor(private uS: UserService) {}

  // Método que se ejecuta después del constructor
  ngOnInit(): void {
    this.uS.list().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

  eliminar(id:number){
    this.uS.delete(id).subscribe((data)=>{
      this.uS.list().subscribe((data)=>{
        this.uS.setList(data);
      });
    });
  }

  // Método para formatear la fecha al formato deseado (DD/MM/AAAA)
  formatDate(date: string): string {
    // Convertimos la fecha proporcionada a un objeto de tipo Date 
    const d = new Date(date);
    
    // Extraemos el día y lo convertimos a una cadena con al menos dos dígitos, añadiendo ceros a la izquierda si es necesario
    let day = d.getDate().toString().padStart(2, '0');

    // Extraemos el mes, sumamos 1 ya que los meses comienzan desde 0 (enero = 0)
    // Luego lo convertimos a una cadena con al menos dos dígitos, añadiendo ceros a la izquierda si es necesario
    let month = (d.getMonth() + 1).toString().padStart(2, '0');

    // Extraemos el año como un número de cuatro dígitos
    let year = d.getFullYear();

    // Devolvemos la fecha en el formato deseado "DD/MM/AAAA"
    return `${day}/${month}/${year}`;
  }
  


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
