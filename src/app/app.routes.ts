import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { CreaeditauserComponent } from './components/user/creaeditauser/creaeditauser.component';
import { ContactoautoridadesComponent } from './components/contactoautoridades/contactoautoridades.component';
import { CreaeditacontactoautoridadeComponent } from './components/contactoautoridades/creaeditacontactoautoridade/creaeditacontactoautoridade.component';
import { ContactoemergenciasComponent } from './components/contactoemergencias/contactoemergencias.component';
import { CreareditarcontactoemergenciasComponent } from './components/contactoemergencias/creareditarcontactoemergencias/creareditarcontactoemergencias.component';


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
