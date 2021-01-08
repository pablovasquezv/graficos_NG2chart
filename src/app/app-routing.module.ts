import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablaUsuariosComponent } from './components/tablas/tabla-usuarios/tabla-usuarios.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablaInsulinaComponent } from './components/tablas/tabla-insulina/tabla-insulina.component';
import { TablaPaisesComponent } from './components/tablas/tabla-paises/tabla-paises.component';
const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '404', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component:TablaUsuariosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registro', component: TablaInsulinaComponent },
  { path: 'Paises', component: TablaPaisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
