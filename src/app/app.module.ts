import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PagenotfoundComponent } from './views/pagenotfound/pagenotfound.component';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { TokenInterceptorService } from './services/interceptors/token-interceptor.service';
import { HomeComponent } from './views/home/home.component';
import { SettingComponent } from './views/setting/setting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppTableComponent } from './shared/app-table/app-table.component';
import { ButtonComponent } from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    SideBarComponent,
    HeaderComponent,
    SettingComponent,
    AppTableComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    AuthService, 
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
