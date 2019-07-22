import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private mailUrl: string;

  constructor(private http:HttpClient) {
    this.mailUrl = 'http://localhost:8080/sendmail'
  }

  public save(user: User){
    return this.http.post(`${this.mailUrl}`, user);
  }
}
