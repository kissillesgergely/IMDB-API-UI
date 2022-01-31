import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ResultListComponent } from './result-list/result-list.component';
import { ResultListYearComponent } from './result-list-year/result-list-year.component';
import { ResultListItemComponent } from './result-list-item/result-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ResultListComponent,
    ResultListYearComponent,
    ResultListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
