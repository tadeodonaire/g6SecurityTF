import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { Enfermedades } from '../../../models/Enfermedades';
import { EnfermedadesService } from '../../../services/enfermedades.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listarenfermedades',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, CommonModule, RouterLink, MatPaginator],
  templateUrl: './listarenfermedades.component.html',
  styleUrl: './listarenfermedades.component.css'
})
export class ListarenfermedadesComponent implements OnInit {
  dataSource: MatTableDataSource<Enfermedades> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'accion01','accion02'];

  constructor(private dS: EnfermedadesService) {}
  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminar(id: number){
    this.dS.delete(id).subscribe((data)=>{
      this.dS.list().subscribe((data)=>{
        this.dS.setList(data);
      });
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
