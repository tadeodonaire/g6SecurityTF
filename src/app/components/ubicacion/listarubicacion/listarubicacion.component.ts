import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Ubicacion } from '../../../models/Ubicacion';
import { UbicacionService } from '../../../services/ubicacion.service';

@Component({
  selector: 'app-listarubicacion',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './listarubicacion.component.html',
  styleUrl: './listarubicacion.component.css'
})
export class ListarubicacionComponent implements OnInit{

  displayedColumns: string[] = ['c5','c2','c3','c4',"c7"]
  dataSource: MatTableDataSource<Ubicacion> = new MatTableDataSource();

  constructor (private uS: UbicacionService) {}

  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.uS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
