import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  onAddServer(servName: HTMLInputElement) {
    // console.log(servName);
    // console.log(this.serverContentInput);
    this.serverCreated.emit({
       serverName: servName.value,
       serverContent: this.serverContentInput.nativeElement.value
     });
  }

  onAddBlueprint(servName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: servName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
