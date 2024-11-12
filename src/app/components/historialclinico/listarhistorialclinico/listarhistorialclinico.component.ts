import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Historialclinico } from '../../../models/historialclinico';
import { HistorialclinicoService } from '../../../services/historialclinico.service';
import { MatPaginator } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listarhistorialclinico',
  standalone: true,
  imports: [MatTableModule,RouterModule,MatPaginator],
  templateUrl: './listarhistorialclinico.component.html',
  styleUrl: './listarhistorialclinico.component.css'
})
export class ListarhistorialclinicoComponent implements OnInit{
  displayedColumns: string[] = ['c1', 'c2', 'c3'];
  dataSource: MatTableDataSource<Historialclinico> = new MatTableDataSource();
  constructor(private hcS: HistorialclinicoService) {}
  ngOnInit(): void {
    this.hcS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.hcS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
