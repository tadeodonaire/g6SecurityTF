import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Alergias } from '../../../models/Alergias';
import { AlergiasService } from '../../../services/alergia.service';
@Component({
  selector: 'app-listaralergias',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterModule],
  templateUrl: './listaralergias.component.html',
  styleUrl: './listaralergias.component.css',
})
export class ListaralergiasComponent implements OnInit {
  dataSource: MatTableDataSource<Alergias> = new MatTableDataSource();
displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'accion01', 'accion02'];
  constructor(private aS: AlergiasService) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.aS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
    eliminar(id: number){
      this.aS.delete(id).subscribe((data)=>{
        this.aS.list().subscribe((data)=>{
          this.aS.setList(data);
        });
      });
    }
}

