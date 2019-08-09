import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import {MailService} from "./service/mail.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { OpenDialogComponent } from './open-dialog/open-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    OpenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
