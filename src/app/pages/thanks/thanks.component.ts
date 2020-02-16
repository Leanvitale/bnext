import { Component, OnInit } from '@angular/core';
import { User } from '../../tools/entities.interfaces';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  public user: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
    localStorage.removeItem('user');
  }

  ngOnInit(): void {
  }

}
