
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { AlergiasComponent } from './components/alergias/alergias.component';
import { CreareditaralergiasComponent } from './components/alergias/creareditaralergias/creareditaralergias.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CreaeditaciudadComponent } from './components/ciudad/creaeditaciudad/creaeditaciudad.component';
import { ContactoautoridadesComponent } from './components/contactoautoridades/contactoautoridades.component';
import { CreaeditacontactoautoridadeComponent } from './components/contactoautoridades/creaeditacontactoautoridade/creaeditacontactoautoridade.component';
import { ContactoemergenciasComponent } from './components/contactoemergencias/contactoemergencias.component';
import { CreareditarcontactoemergenciasComponent } from './components/contactoemergencias/creareditarcontactoemergencias/creareditarcontactoemergencias.component';
import { CreaeditadistritoComponent } from './components/distrito/creaeditadistrito/creaeditadistrito.component';
import { DistritoComponent } from './components/distrito/distrito.component';

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
        path: 'Ciudad', component: CiudadComponent,
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
        path: 'Distritos', component: DistritoComponent,
        children: [
            {
                path: 'registrar', 
                component:CreaeditadistritoComponent
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
    }
];