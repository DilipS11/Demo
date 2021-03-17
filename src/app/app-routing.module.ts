import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from './shared/root-page/root-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: RootPageComponent,
    children: [{ path: '', loadChildren: './Pages/Product-Details/Product-Details.module#ProductDetailsModule' }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
