import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './pages/page-list-clients/page-list-clients.component';

const routes: Routes = [
  // toutes les routes
  // '' PageListClients
  // 'add-client' PageAdddClient
  // 'edit-client' PageEditClient
  // n'oubliez pas de vérifier dans Network !
  { path: '', component: PageListClientsComponent },
  { path: 'add-client', component: PageAddClientComponent },
  { path: 'edit-client', component: PageEditClientComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
