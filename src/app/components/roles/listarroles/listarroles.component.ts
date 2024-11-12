import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink, RouterModule } from '@angular/router';
import { RolesService } from '../../../services/roles.service';
import { Roles } from '../../../models/Roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listarroles',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule, CommonModule, RouterLink, MatPaginator],
  templateUrl: './listarroles.component.html',
  styleUrl: './listarroles.component.css'
})
export class ListarrolesComponent {
  dataSource: MatTableDataSource<Roles> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3'];
    constructor(private rS: RolesService) {}
    ngOnInit(): void {
      this.rS.list().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
      this.rS.getList().subscribe((data) => {
        this.dataSource = new MatTableDataSource(data);
      });
    }
     
      @ViewChild(MatPaginator) paginator!: MatPaginator;
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
  }
  }
