import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RegistrationComponent } from './registration/registration.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { LoginComponent } from './login/login.component';
import { ForgotPSWDComponent } from './forgot-pswd/forgot-pswd.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    DashboardComponent,
    AdminHomeComponent,
    RegistrationComponent,
    IndexpageComponent,
    PaymentFormComponent,
    LoginComponent,
    ForgotPSWDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
