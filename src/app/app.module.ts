import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { en_US, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from './components/global-nav/global-nav.component';
import { InfoModalComponent } from './components/info/info.modal';
import { RewardModalComponent } from './components/reward-modal/reward-modal.component';
import { CartComponent } from './pages/cart/cart.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RewardDrawerComponent } from './components/reward-drawer/reward-drawer.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    DashboardComponent,
    MarketplaceComponent,
    CartComponent,
    ProfileComponent,
    OrdersComponent,
    InfoModalComponent,
    RewardModalComponent,
    RewardDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ScrollDispatchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, {provide: LocationStrategy, useClass: HashLocationStrategy}, InfoModalComponent],
  entryComponents: [RewardModalComponent, RewardDrawerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
