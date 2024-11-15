import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataset, ChartOptions, ChartType, registerables } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { UserService } from '../../../services/user.service';
import { UsuarioDispositivoRolDTO } from '../../../models/usuariodispositivorolDTO';

Chart.register(...registerables);
@Component({
  selector: 'app-reporteusuariodispositivoxroles',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './reporteusuariodispositivoxroles.component.html',
  styleUrl: './reporteusuariodispositivoxroles.component.css'
})
export class ReporteusuariodispositivoxrolesComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };

  barChartLabels: string[] = [];
  barChartType: ChartType = 'pie';
  barChartLegend = true;
  barChartData: ChartDataset[] = [];

  constructor(private uS: UserService) {}

  ngOnInit(): void {
    this.uS.getRolxDispositivo().subscribe((data: UsuarioDispositivoRolDTO[]) => {
      // Agrupamos los dispositivos por usuario y rol
      const groupedData = data.reduce((acc, item) => {
        const key = `${item.nombreUsuario} ${item.apellidoUsuario} (${item.rolUsuario})`;
        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key]++;
        return acc;
      }, {} as { [key: string]: number });

      // Convertimos los datos agrupados en etiquetas y datos para el gráfico
      this.barChartLabels = Object.keys(groupedData);
      this.barChartData = [
        {
          data: Object.values(groupedData),
          label: 'Cantidad de dispositivos por usuario y rol',
          backgroundColor: [
            '#f3d295',
            '#c18c2b',
            '#ecab36',
            '#785009',
            '#CD5C5C',
            '#D2691E',
            '#B22222',
            '#800000',
          ],
          borderColor: 'rgba(173, 216, 230, 1)',
          borderWidth: 1,
        },
      ];
    });
  }
}
