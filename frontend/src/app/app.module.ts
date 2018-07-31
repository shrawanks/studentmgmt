import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
MatButtonModule, MatCheckboxModule,
MatDatepickerModule,
MatFormFieldModule,
MatChipsModule,
MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
