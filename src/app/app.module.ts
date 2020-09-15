import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbInputModule,
  NbCardModule,
  NbButtonModule,
  NbUserModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken, NbUser } from '@nebular/auth';
import { TokenInterceptor, TokenInterceptorProvider } from './interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ServiceComponent,
    ContactComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    NbUserModule,
    NbInputModule,
    NbCardModule,
    HttpClientModule,
    NbButtonModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'http://localhost:8000',
              login: {
                // ...
                endpoint: '/auth/login',
                method : 'post',
                redirect: {
                  success: '/accueil',
                  failure: null, // stay on the same page
                },
              },
              logout: {
                // ...
                endpoint: '',
                method : 'delete',
                redirect: {
                  success: '/auth/login',
                  failure: null, // stay on the same page
                },
              },
              register: {
                // ...
                endpoint: '/register',
                method : 'post',
                redirect: {
                  success: '/users',
                  failure: null, // stay on the same page
                },
              },
              token: {
                class: NbAuthJWTToken,
                key: 'access_token'
              }
        }),
      ],
      forms: {},
    })
  ],
  providers: [TokenInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
