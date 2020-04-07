import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-container/search-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayTableComponent } from './display-table/display-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    DisplayTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  // dependency injection, it instantiates the service wherever it is called
  // using the new operator will tightly couple the service to a specific class
  // implementation. it involves injecting or providing a dependency of a class to its constructor
  // the providers makes it possible for angular to create a single instance of that module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
