import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { CreaeditaciudadComponent } from './components/ciudad/creaeditaciudad/creaeditaciudad.component';

export const routes: Routes = [
    {
        path: 'usuarios', 
        component: UserComponent,
        children: [
            {
                path: 'nuevo', 
                component: CreaeditauserComponent
            },
            {
                path: 'ediciones/:id', 
                component: CreaeditauserComponent
            }
        ]
    },
    {
        path: 'Ciudad', 
        component: CiudadComponent,
        children: [
            {
                path: 'registrar', 
                component:CreaeditaciudadComponent
            },
            {
                path:'ediciones/:id',component:CreaeditaciudadComponent
            }
        ]
    }
];

