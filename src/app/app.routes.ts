import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { ContactoAutoridadesComponent } from './components/contacto-autoridades/contacto-autoridades.component';
import { CreaEditaContactoAutoridadesComponent } from './components/contacto-autoridades/creaeditacontacto-autoridades/creaeditacontacto-autoridades.component';

export const routes: Routes = [
    {
        path:'usuarios', component:UserComponent,
        children:[
            {
                path:'nuevo', component:CreaeditauserComponent

            }
        ]
    },

    {
        path: 'contacto-autoridades', component: ContactoAutoridadesComponent,
        children: [
            {
                path: 'nuevo', component: CreaEditaContactoAutoridadesComponent
            },
            {
                path: 'editar/:id', component: CreaEditaContactoAutoridadesComponent
            }
        ]
    }
];
