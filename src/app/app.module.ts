import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatSidenavModule,
   MatInputModule,
   MatButtonModule, 
   MatSelectModule, 
   MatIconModule, 
   MatCardModule,
   MatToolbarModule,
   MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RandommUserService } from './randomm-user.service';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PasswordRecoveryComponent,
    HomeComponent,
    NotFoundComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  providers: [RandommUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
