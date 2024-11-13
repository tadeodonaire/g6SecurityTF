import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Detallemedico } from '../../../models/detallemedico';
import { DetallemedicoService } from '../../../services/detallemedico.service';
import { MatPaginator } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listardetallemedico',
  standalone: true,
  imports: [MatTableModule, RouterModule,MatPaginator],
  templateUrl: './listardetallemedico.component.html',
  styleUrl: './listardetallemedico.component.css'
})
export class ListardetallemedicoComponent implements OnInit{
  displayedColumns: string[] = ['c1', 'c2', 'c3','c4'];
  dataSource: MatTableDataSource<Detallemedico> = new MatTableDataSource();
  constructor(private dmS: DetallemedicoService) {}
  ngOnInit(): void {
    this.dmS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dmS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
}
@ViewChild(MatPaginator) paginator!: MatPaginator;
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}}