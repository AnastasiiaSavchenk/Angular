import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Lista } from './lista/lista';
import { Formulario } from './formulario/formulario';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:Home},
  {path:'lista', component:Lista},
  {path:'formulario', component:Formulario},
  { path:'formulario/:id', component: Formulario }, 
  {path:'**', component:Home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
