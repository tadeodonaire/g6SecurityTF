import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DispositivoContactoAutoridadDTO } from '../../../../models/DispositivocontactoautoridadDTO';
import { UserService } from '../../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { DispositivoService } from '../../../../services/dispositivo.service';

@Component({
  selector: 'app-listarreportedetalledispositivoautoridad',
  standalone: true,
  imports: [MatTableModule, MatPaginator],
  templateUrl: './listarreportedetalledispositivoautoridad.component.html',
  styleUrl: './listarreportedetalledispositivoautoridad.component.css'
})
export class ListarreportedetalledispositivoautoridadComponent implements OnInit{
  displayedColumns: string[] = ['dispositivo', 'Autoridad', 'Telefono Autoridad'];
  dataSource: MatTableDataSource<DispositivoContactoAutoridadDTO> = new MatTableDataSource();

  constructor(private dispositivoService: DispositivoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idUsuario = Number(this.route.snapshot.paramMap.get('idUsuario'));
    this.dispositivoService.getDetalleDispositivoContactoAutoridad(idUsuario).subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
