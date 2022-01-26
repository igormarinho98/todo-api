import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CashComponent } from './cash/cash.component';
import { HomeComponent } from './home/home.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { AuthComponent } from './auth/auth.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CashComponent,
    HomeComponent,
    TodoAppComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [...materialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
