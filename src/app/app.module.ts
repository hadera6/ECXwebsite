import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrickerComponent} from '../tricker/tricker.component';
import { HeaderComponent} from '../shared/header/header.component';
import { IntroComponent} from '../home/intro/intro.component';
import { FooterComponent} from '../shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TrickerComponent,
    HeaderComponent,
    IntroComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
