import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
 // templateUrl: './servers.component.html',
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowedServer = true;
  maxTime = 5000;
  serverCreationStatus = 'Not Yet created';
  serverName = 'Server' ;
  serverCreated = false ;
  servers = ['Server1','Server2'];

  constructor() {
    setTimeout(() => {
      this.allowedServer = false;
    }, this.maxTime);
   }
  ngOnInit() {
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onserverCreate() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created! Server Name : ' + this.serverName;
  }
}
