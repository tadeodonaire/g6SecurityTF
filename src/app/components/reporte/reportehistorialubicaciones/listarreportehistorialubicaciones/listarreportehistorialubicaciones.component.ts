import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioHistorialUbicacionDTO } from '../../../../models/UsuarioHistorialUbicacionDTO';

@Component({
  selector: 'app-listarreportehistorialubicaciones',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './listarreportehistorialubicaciones.component.html',
  styleUrl: './listarreportehistorialubicaciones.component.css',
})
export class ListarreportehistorialubicacionesComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'fecha', 'hora', 'distrito'];
  dataSource: MatTableDataSource<UsuarioHistorialUbicacionDTO> = new MatTableDataSource();

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idUsuario = Number(this.route.snapshot.paramMap.get('idUsuario'));
    this.userService.getHistorialUbicacionesxUsuario(idUsuario).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
