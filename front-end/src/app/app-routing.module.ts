import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CashComponent } from './cash/cash.component';
import { HomeComponent } from './home/home.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { GoalComponent } from './goal/goal.component';

const routes : Routes = [
  {path: 'cash', component: CashComponent },
  {path: 'cash:id', component: CashComponent },
  {path: 'home', component: HomeComponent},
  {path:'todo', component: TodoAppComponent},
  {path: 'goal', component: GoalComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', redirectTo:'/home', pathMatch: 'full'},

]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
