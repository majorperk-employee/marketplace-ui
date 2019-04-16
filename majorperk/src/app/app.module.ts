import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { GlobalNavComponent } from './components/global-nav/global-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    DashboardComponent,
    MarketplaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdMobileModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
