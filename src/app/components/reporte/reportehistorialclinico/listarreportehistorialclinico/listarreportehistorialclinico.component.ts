import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioHistorialClinicoDTO } from '../../../../models/UsuarioHistorialClinicoDTO';

@Component({
  selector: 'app-listarreportehistorialclinico',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './listarreportehistorialclinico.component.html',
  styleUrl: './listarreportehistorialclinico.component.css'
})
export class ListarreportehistorialclinicoComponent implements OnInit{
  displayedColumns: string[] = ['nombre', 'apellido', 'alergia', 'enfermedad'];
  dataSource: MatTableDataSource<UsuarioHistorialClinicoDTO> = new MatTableDataSource();

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idUsuario = Number(this.route.snapshot.paramMap.get('idUsuario'));
    this.userService.getHistorialClinicoxUsuario(idUsuario).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  }

}
