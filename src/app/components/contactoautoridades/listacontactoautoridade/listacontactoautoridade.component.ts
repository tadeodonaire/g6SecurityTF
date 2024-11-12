import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {  RouterLink, RouterModule } from '@angular/router';
import { Contacto_Autoridades } from '../../../models/contactoautoridades';
import { ContactoautoridadesService } from '../../../services/contactoautoridades.service';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-listacontactoautoridade',
  standalone: true,
  imports: [MatTableModule, MatIconModule,CommonModule,RouterLink, RouterModule,MatPaginator],
  templateUrl: './listacontactoautoridade.component.html',
  styleUrl: './listacontactoautoridade.component.css'
})
export class ListacontactoautoridadeComponent implements OnInit{
  dataSource: MatTableDataSource<Contacto_Autoridades> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'accion01', 'accion02'];
  constructor(private cS: ContactoautoridadesService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number){
    this.cS.delete(id).subscribe((data)=>{
      this.cS.list().subscribe((data)=>{
        this.cS.setList(data);
      });
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
