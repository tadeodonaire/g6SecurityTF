import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { dispositivo } from '../../../models/dispositivo';
import { DispositivoService } from '../../../services/dispositivo.service';


@Component({
  selector: 'app-listardispositivos',
  standalone: true,
  imports: [MatTableModule, RouterModule,MatPaginator],
  templateUrl: './listardispositivos.component.html',
  styleUrl: './listardispositivos.component.css'
})
export class ListardispositivosComponent implements OnInit{
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];
  dataSource: MatTableDataSource<dispositivo> = new MatTableDataSource();
  constructor(private diS: DispositivoService) {}
  ngOnInit(): void {
    this.diS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.diS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
}

@ViewChild(MatPaginator) paginator!: MatPaginator;
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}}
