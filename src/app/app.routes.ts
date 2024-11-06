
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { AlergiasComponent } from './components/alergias/alergias.component';
import { CreareditaralergiasComponent } from './components/alergias/creareditaralergias/creareditaralergias.component';
import { HistorialclinicoComponent } from './components/historialclinico/historialclinico.component';
import { CreareditahistorialclinicoComponent } from './components/historialclinico/creareditahistorialclinico/creareditahistorialclinico.component';
import { DetallemedicoComponent } from './components/detallemedico/detallemedico.component';
import { CreareditardetallemedicoComponent } from './components/detallemedico/creareditardetallemedico/creareditardetallemedico.component';

export const routes: Routes = [
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
        path:'detalleMedico', component:DetallemedicoComponent,
        children:[
            {
                path:'nuevo', component:CreareditardetallemedicoComponent

            }
        ]
    }
];