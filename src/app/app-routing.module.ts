import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { RewardItemsResolve } from './service/resolve/shopping.resolve';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'marketplace', component: MarketplaceComponent, resolve: { items: RewardItemsResolve } },
  {path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }