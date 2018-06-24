import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: {id: number, name: string, status: string}[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }
}
