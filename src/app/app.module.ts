import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCommonModule, MatInputModule, MatFormField } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { TodoitemService } from './service/todoitem.service';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemHeaderComponent } from './item-header/item-header.component';
import { StaticVariablesService } from './service/staticvariables.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ItemListComponent,
    ItemRowComponent,
    ItemViewComponent,
    ItemEditComponent,
    ItemHeaderComponent
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoitemService,
    StaticVariablesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
