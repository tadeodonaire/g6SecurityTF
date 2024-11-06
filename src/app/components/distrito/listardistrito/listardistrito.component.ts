import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Distrito } from '../../../models/Distrito';
import { DistritoService } from '../../../services/distrito.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listardistrito',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './listardistrito.component.html',
  styleUrl: './listardistrito.component.css'
})
export class ListardistritoComponent implements OnInit {
  displayedColumns: string[] = ['c1','c2','c3'];
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  constructor(private diS: DistritoService) {}

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
  }
}
