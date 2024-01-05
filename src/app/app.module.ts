import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { FooterComponent } from './footer/footer.component';
import { ParentRegistrationComponent } from './parent-registration/parent-registration.component';
import { RegisterComponent } from './register/register.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutComponent } from './about/about.component';
import { ParentRegisterComponent } from './parent-register/parent-register.component';
import { ChildRegisterComponent } from './child-register/child-register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    FooterComponent,
    ParentRegistrationComponent,
    RegisterComponent,
    FaqsComponent,
    AboutComponent,
    ParentRegisterComponent,
    ChildRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
