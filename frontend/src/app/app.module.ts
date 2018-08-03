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
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { MenuComponent } from './header/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule }   from '@angular/forms';
import {appRoutes} from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    SignupComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
  BrowserAnimationsModule,
    BrowserModule,
    NgbModule.forRoot(),
MatButtonModule, MatCheckboxModule,
MatDatepickerModule,
MatFormFieldModule,
MatChipsModule,
MatIconModule,
FormsModule,
RouterModule.forRoot(appRoutes),HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
