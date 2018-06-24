import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit, OnChanges, OnDestroy {

  paramsSubscription: Subscription;
  user: {id: number, name: string};

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
  // return this.userService.getUser(1);
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    };
    this.paramsSubscription = this.router.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  ngOnChanges() {
    // this.user = {
    //   id: this.router.snapshot.params['id'],
    //   name: this.router.snapshot.params['name']
    // };
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
