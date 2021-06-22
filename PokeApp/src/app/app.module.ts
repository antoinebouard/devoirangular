import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { AdoptdropdownComponent } from './nav/adopt/adoptdropdown/adoptdropdown.component';
import { AdoptlistComponent } from './nav/adopt/adoptlist/adoptlist.component';
import { AdoptlistitemComponent } from './nav/adopt/adoptlistitem/adoptlistitem.component';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokecardComponent } from './pokelist/pokecard/pokecard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdoptdropdownComponent,
    AdoptlistComponent,
    AdoptlistitemComponent,
    PokelistComponent,
    PokecardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
