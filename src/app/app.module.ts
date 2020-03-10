import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Server2Component } from './server2/server2.component';
import { MyDirectivesComponent } from './my-directives/my-directives.component';
import { DynamicStyleComponent } from './dynamic-style/dynamic-style.component';

@NgModule({
  declarations: [
    AppComponent,
    Server2Component,
    MyDirectivesComponent,
    DynamicStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
