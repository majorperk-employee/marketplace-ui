import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'marketplace', component: MarketplaceComponent },
  {path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }