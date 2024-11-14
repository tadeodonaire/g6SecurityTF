import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Historialubicacion } from '../../../models/Historialubicacion';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { HistorialubicacionService } from '../../../services/historialubicacion.service';

@Component({
  selector: 'app-listarhistorialubicacion',
  standalone: true,
  imports: [MatPaginatorModule, MatTableModule],
  templateUrl: './listarhistorialubicacion.component.html',
  styleUrl: './listarhistorialubicacion.component.css'
})
export class ListarhistorialubicacionComponent implements OnInit{

  dataSource: MatTableDataSource<Historialubicacion> = new MatTableDataSource();
  displayedColumns: string[] = [ 'c2', 'c3', 'c4', 'c5','c6'];

  constructor (private huS: HistorialubicacionService) {}


  ngOnInit(): void {
    this.huS.list().subscribe((data) => {
      this.dataSource.data = data;  // Cambia el conjunto de datos directamente
      this.dataSource.paginator = this.paginator;
    });
  
    this.huS.getList().subscribe((data) => {
      this.dataSource.data = data;  // Cambia el conjunto de datos directamente
      this.dataSource.paginator = this.paginator;
    });
  }


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
