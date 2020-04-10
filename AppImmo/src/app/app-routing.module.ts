import { ClientFormComponent } from './client/client-form/client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { AccueilComponent } from './accueil/accueil.component';


const routes: Routes = [
{path: 'client', component: ClientFormComponent,children: [
{path: 'edit/:id', component:ClientFormComponent}



]
},

{path:'proprietaires', component:ProprietairesComponent},
{path:'accueil', component:AccueilComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
