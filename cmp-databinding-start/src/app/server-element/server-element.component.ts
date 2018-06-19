import { Component,
   OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ElementRef,
  ViewChild,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // None, Native, Emulated
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('pContent') pcont: ElementRef;

  constructor() {
    console.log('server-element constructor called');
  }

  isViewQuery() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('server-element ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('server-element ng-oninit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.pcont.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('server-element ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('server-element ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('server-element ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('server-element ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.pcont.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('server-element ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('server-element ngOnDestroy called');
  }
}
