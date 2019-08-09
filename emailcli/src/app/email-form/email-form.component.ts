import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {MailService} from "../service/mail.service";
import {MatDialog} from '@angular/material';
import {OpenDialogComponent} from "../open-dialog/open-dialog.component";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

    users: User;
    dialog: MatDialog;

  constructor(private route: ActivatedRoute, private router: Router, private mailService: MailService) {
    this.users = new User();
  }

  onSubmit() {
    this.mailService.save(this.users).subscribe(result=> this.openDialog());
  }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(OpenDialogComponent);
  }

}
