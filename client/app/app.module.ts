import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { AccountsComponent } from './components/accounts/accounts.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { AccountDetailComponent } from './components/accountDetail/account-detail.component';

import { AccountService }  from './services/account.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    AccountsComponent,
    DashboardComponent,
    AccountDetailComponent
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
