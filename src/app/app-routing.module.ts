import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { BrandsResolve, CartItemsResolve, OrderItemsResolve, CategoriesResolve } from './service/resolve/shopping.resolve';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AccountResolve } from './service/resolve/account.resolve';

const routes: Routes = [
  {path: '', resolve: { account: AccountResolve }, children: [
    {path: 'dashboard', component: DashboardComponent },
    {path: 'marketplace', component: MarketplaceComponent, resolve: { categories: CategoriesResolve, items: BrandsResolve}},
    {path: 'marketplace/:filter', component: MarketplaceComponent, resolve: { categories: CategoriesResolve, items: BrandsResolve}},
    {path: 'cart', component: CartComponent, resolve: { items: CartItemsResolve } },
    {path: 'profile', component: ProfileComponent },
    {path: 'orders', component: OrdersComponent, resolve: { orders: OrderItemsResolve } },
    {path: '**', redirectTo: 'dashboard' }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }