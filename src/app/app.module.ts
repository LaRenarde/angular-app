import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbInputModule, NbCardModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

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
    NbInputModule,
    NbCardModule,
    HttpClientModule,
    NbButtonModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
