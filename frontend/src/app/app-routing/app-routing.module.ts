import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../user/login/login.component';
import { SignupComponent } from '../user/signup/signup.component';
import { MenuComponent } from '../header/menu/menu.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';


  export const appRoutes : Routes = [
    { path : '', component :HomeComponent },
    { path : 'signup', component :HomeComponent },
    { path : 'login', component :LoginComponent },
  ];
