
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
import { CreaeditadistritoComponent } from './components/distrito/creaeditadistrito/creaeditadistrito.component';
import { DistritoComponent } from './components/distrito/distrito.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CreaeditaubicacionComponent } from './components/ubicacion/creaeditaubicacion/creaeditaubicacion.component';
import { DispositivoComponent } from './components/dispositivo/dispositivo.component';
import { CreaeditardispositivosComponent } from './components/dispositivo/creaeditardispositivos/creaeditardispositivos.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreaeditahistorialubicacionComponent } from './components/historialubicacion/creaeditahistorialubicacion/creaeditahistorialubicacion.component';
import { HistorialubicacionComponent } from './components/historialubicacion/historialubicacion.component';


export const routes: Routes = [
    {
        path:'menu', component:MenuComponent
    },
    {
        path:'usuarios', component:UserComponent,
        children:[
            {
                path:'nuevo', component:CreaeditauserComponent

            },
            {
                path:'ediciones/:id', component:CreaeditauserComponent
            }
        ]
    },
    {
        path:'alergias', component:AlergiasComponent,
        children:[
            {
                path:'nuevo', component:CreareditaralergiasComponent

            },
            {
                path:'ediciones/:id', component:CreareditaralergiasComponent
            }
        ]
    },
    {
        path:'historialClinico', component:HistorialclinicoComponent,
        children:[
            {
                path:'nuevo', component:CreareditahistorialclinicoComponent
            }
        ]
    },
    {
        path: 'Ciudad', component:CiudadComponent,
        children: [
            {
                path: 'registrar', 
                component:CreaeditaciudadComponent
            },
            {
                path:'ediciones/:id',component:CreaeditaciudadComponent
            }
        ]
    },
    {
        path:'detalleMedico', component:DetallemedicoComponent,
        children:[
            {
                path:'nuevo', component:CreareditardetallemedicoComponent
            }
        ]
    },
    {
        path: 'Distritos', component: DistritoComponent,
        children: [
            {
                path: 'registrar', 
                component:CreaeditadistritoComponent
            }
        ]
    },
    {
        path: 'ubicaciones', component: UbicacionComponent,
        children: [
            {
                path: 'registrar', 
                component:CreaeditaubicacionComponent
            }
        ]
    },
    {
        path:'contactosautoridades', component:ContactoautoridadesComponent,
        children:[
            {
                path:'nuevo', component:CreaeditacontactoautoridadeComponent
            },
            {
                path: 'editar/:id', component:CreaeditacontactoautoridadeComponent
            }
        ]
    },
    {
        path:'contactosemergencias', component:ContactoemergenciasComponent,
        children:[
            {
                path:'nuevo', component:CreareditarcontactoemergenciasComponent
            },
            {
                path: 'editar/:id', component:CreareditarcontactoemergenciasComponent
            }
        ]
    },
    {
        path:'dispositivo', component:DispositivoComponent,
        children:[
            {
                path:'nuevo', component:CreaeditardispositivosComponent
            }
        ]
    },
    {
        path:'historialubicaciones', component:HistorialubicacionComponent,
        children:[
            {
                path:'registrar', component:CreaeditahistorialubicacionComponent
            },
        ],
    }
];
