import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPSWDComponent } from './forgot-pswd/forgot-pswd.component';
import { IndexpageComponent } from './indexpage/indexpage.component';
import { LoginComponent } from './login/login.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path:'', component: IndexpageComponent },
  { path:'Products', component: ProductListComponent },
  { path:'ProductInfo/:id', component: ProductDetailComponent },
  { path:'Dashboard', component: DashboardComponent },
  { path:'Admin-home', component: AdminHomeComponent },
  { path:'Register', component: RegistrationComponent },
  { path:'Payment', component: PaymentFormComponent },
  { path:'Login', component: LoginComponent },
  { path:'ForgotPSWD', component: ForgotPSWDComponent },
  // { path:'Index', component: IndexpageComponent },
  { path:'**', component: IndexpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
