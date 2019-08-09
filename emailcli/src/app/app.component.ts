import { Component } from '@angular/core';
import {MatDialog} from '@angular/material'
import {OpenDialogComponent} from "./open-dialog/open-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  dialog: MatDialog;

  constructor(){
    this.title = 'Email'
  }

  openDialog(){
    this.dialog.open(OpenDialogComponent);
  }
}
