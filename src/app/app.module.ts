import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ValuesComponent } from './values/values.component';
import { ValueService } from './value.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ValuesComponent,],
  providers :[ValueService],
  bootstrap:    [ AppComponent, ]
})
export class AppModule { }
