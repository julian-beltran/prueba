import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';



const routes: Routes = [

  { path: '', component: AppComponent, children:[
      {path:'detalle/:id',component: DetalleLibroComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
