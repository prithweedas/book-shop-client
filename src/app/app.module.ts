import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './app.error-handler';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BookShopHttpInterceptor } from './services/BookShopHttpInterceptor.service';
import { TokenService } from './services/token.service';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { ListItemsComponent } from './list-items/list-items.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemsService } from './services/items.service';
import { ItemViewComponent } from './item-view/item-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ListItemsComponent
    AdditemComponent,
    ItemViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterializeModule,
    RouterModule.forRoot([
      {path: '', redirectTo : '/items', pathMatch:'full'},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'items', component: ListItemsComponent },
      { path: 'items/add', component: AdditemComponent },
      { path: 'items/:id', component: ItemViewComponent }
    ])
  ],
  providers: [
    TokenService,
    AuthService,
    ItemsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BookShopHttpInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
