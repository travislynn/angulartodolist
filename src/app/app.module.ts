import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
