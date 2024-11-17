import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { AlergiasComponent } from './components/alergias/alergias.component';
import { CreareditaralergiasComponent } from './components/alergias/creareditaralergias/creareditaralergias.component';
import { HistorialclinicoComponent } from './components/historialclinico/historialclinico.component';
import { CreareditahistorialclinicoComponent } from './components/historialclinico/creareditahistorialclinico/creareditahistorialclinico.component';
import { DetallemedicoComponent } from './components/detallemedico/detallemedico.component';
import { CreareditardetallemedicoComponent } from './components/detallemedico/creareditardetallemedico/creareditardetallemedico.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CreaeditaciudadComponent } from './components/ciudad/creaeditaciudad/creaeditaciudad.component';
import { ContactoautoridadesComponent } from './components/contactoautoridades/contactoautoridades.component';
import { CreaeditacontactoautoridadeComponent } from './components/contactoautoridades/creaeditacontactoautoridade/creaeditacontactoautoridade.component';
import { ContactoemergenciasComponent } from './components/contactoemergencias/contactoemergencias.component';
import { CreareditarcontactoemergenciasComponent } from './components/contactoemergencias/creareditarcontactoemergencias/creareditarcontactoemergencias.component';
import { EnfermedadesComponent } from './components/enfermedades/enfermedades.component';
import { CreareditarenfermedadesComponent } from './components/enfermedades/creareditarenfermedades/creareditarenfermedades.component';
import { CreaeditahistorialubicacionComponent } from './components/historialubicacion/creaeditahistorialubicacion/creaeditahistorialubicacion.component';
import { CreaeditadistritoComponent } from './components/distrito/creaeditadistrito/creaeditadistrito.component';
import { DistritoComponent } from './components/distrito/distrito.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CreaeditaubicacionComponent } from './components/ubicacion/creaeditaubicacion/creaeditaubicacion.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { CreaeditardispositivosComponent } from './components/dispositivo/creaeditardispositivos/creaeditardispositivos.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistorialubicacionComponent } from './components/historialubicacion/historialubicacion.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreareditarrolesComponent } from './components/roles/creareditarroles/creareditarroles.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { ReportecantidadrelacioncontactosComponent } from './components/reporte/reportecantidadrelacioncontactos/reportecantidadrelacioncontactos.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { LoginComponent } from './components/login/login.component';
import { seguridadGuard } from './guard/seguridad.guard';
import { ListarreportehistorialubicacionesComponent } from './components/reporte/reportehistorialubicaciones/listarreportehistorialubicaciones/listarreportehistorialubicaciones.component';
import { ReportehistorialubicacionesComponent } from './components/reporte/reportehistorialubicaciones/reportehistorialubicaciones.component';
import { ListarreportehistorialclinicoComponent } from './components/reporte/reportehistorialclinico/listarreportehistorialclinico/listarreportehistorialclinico.component';
import { ReporteHistorialClinicoComponent } from './components/reporte/reportehistorialclinico/reportehistorialclinico.component';
import { ReporteusuariodispositivoxrolesComponent } from './components/reporte/reporteusuariodispositivoxroles/reporteusuariodispositivoxroles.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'navegacion',
    component: NavegacionComponent,
  },
  {
    path: 'usuarios',
    component: UserComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditauserComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditauserComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'alergias',
    component: AlergiasComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditaralergiasComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreareditaralergiasComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'historialClinico',
    component: HistorialclinicoComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditahistorialclinicoComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'Ciudad',
    component: CiudadComponent,
    children: [
      {
        path: 'registrar',
        component: CreaeditaciudadComponent,
      },
      {
        path: 'ediciones/:id',
        component: CreaeditaciudadComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'detalleMedico',
    component: DetallemedicoComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditardetallemedicoComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'Distritos',
    component: DistritoComponent,
    children: [
      {
        path: 'registrar',
        component: CreaeditadistritoComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'ubicaciones',
    component: UbicacionComponent,
    children: [
      {
        path: 'registrar',
        component: CreaeditaubicacionComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'contactosautoridades',
    component: ContactoautoridadesComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditacontactoautoridadeComponent,
      },
      {
        path: 'editar/:id',
        component: CreaeditacontactoautoridadeComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'contactosemergencias',
    component: ContactoemergenciasComponent,
    children: [
      {
        path: 'nuevo',
        component: CreareditarcontactoemergenciasComponent,
      },
      {
        path: 'editar/:id',
        component: CreareditarcontactoemergenciasComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'enfermedad',
    component: EnfermedadesComponent,
    children: [
      {
        path: 'registrar',
        component: CreareditarenfermedadesComponent,
      },
      {
        path: 'editar/:id',
        component: CreareditarenfermedadesComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'dispositivo',
    component: DispositivoComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditardispositivosComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'historialubicaciones',
    component: HistorialubicacionComponent,
    children: [
      {
        path: 'registrar',
        component: CreaeditahistorialubicacionComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'roles',
    component: RolesComponent,
    children: [
      {
        path: 'registrar',
        component: CreareditarrolesComponent,
      },
      {
        path: 'editar/:id',
        component: CreareditarrolesComponent,
      },
    ],
    canActivate: [seguridadGuard],
  },
  {
    path: 'reportes',
    component: ReporteComponent,
    children: [
      {
        path: 'rolxdispositivodeusuario',
        component: ReporteusuariodispositivoxrolesComponent,
      },
      {
        path: 'reportehistorialclinico',
        component: ReporteHistorialClinicoComponent,
      },
      {
        path: 'informacion-clinica/:idUsuario',
        component: ListarreportehistorialclinicoComponent,
      },
      {
        path: 'reportehistorialubicaciones',
        component: ReportehistorialubicacionesComponent,
      },
      {
        path: 'historial-ubicaciones/:idUsuario',
        component: ListarreportehistorialubicacionesComponent,
      },
    ],
  },
];
