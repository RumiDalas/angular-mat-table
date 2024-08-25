import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainListComponent } from './main-list/main-list.component';
import { MainListShellComponent } from './main-list-shell/main-list-shell.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { DetailsFormShellComponent } from './details-form-shell/details-form-shell.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    MainListShellComponent,
    DetailsFormComponent,
    DetailsFormShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
