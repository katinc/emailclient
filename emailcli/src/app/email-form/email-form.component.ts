import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {ActivatedRoute, Router} from "@angular/router";
import {MailService} from "../service/mail.service";

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  users: User;

  constructor(private route: ActivatedRoute, private router: Router, private mailService: MailService) {
    this.users = new User();
  }

  onSubmit() {
    this.mailService.save(this.users);
  }

  ngOnInit() {
  }

}
