import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    color: white;
  }
  `]
})
export class ServerComponent {
  serverID = 10;
  serverStatus: String = 'Running';
  constructor(){
    this.serverStatus = Math.random()<0.5 ? 'online' : 'offline';
  }

  getserverStatus() {
    return this.serverStatus;
  }

  getColor()
  {
    return this.serverStatus == 'online' ? 'green' : 'red';  
  }
}
