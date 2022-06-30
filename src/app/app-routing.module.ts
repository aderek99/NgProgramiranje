import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetaljiComponent } from './detalji/detalji.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NovaKomponentaComponent } from './nova-komponenta/nova-komponenta.component';


const routes: Routes = [
  { path: "", component: NovaKomponentaComponent  },
  { path: "drzave", component: DrzaveComponent },
  { path: "drzava-detalji/:id", component: DetaljiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
