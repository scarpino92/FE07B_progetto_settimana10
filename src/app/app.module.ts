import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosPage } from './pages/todos.page';
import { CompletedPage } from './pages/completed.page';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Route[] = [
  {
    path:'',
    component: TodosPage,
  },
  {
    path:'completed',
    component: CompletedPage,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosPage,
    CompletedPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
