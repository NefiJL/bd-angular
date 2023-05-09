import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { enviroment } from '../enviroment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireDatabaseModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
