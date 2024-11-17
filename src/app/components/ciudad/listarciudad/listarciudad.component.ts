import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Ciudad } from '../../../models/Ciudad';
import { CiudadService } from '../../../services/ciudad.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarciudad',
  standalone: true,
  imports: [MatTableModule,MatIconModule,CommonModule,MatPaginator,RouterLink],
  templateUrl: './listarciudad.component.html',
  styleUrl: './listarciudad.component.css'
})
export class ListarciudadComponent implements OnInit{
  dataSource: MatTableDataSource<Ciudad> = new MatTableDataSource();
  displayedColumns: string[]=['cc1','cc2','accion01','accion02'];

  constructor (private cS: CiudadService) {}

  ngOnInit(): void {
    this.cS.list().subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe(data =>{
      this.dataSource=new MatTableDataSource(data);
    });
  }

  eliminar(id:number){
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