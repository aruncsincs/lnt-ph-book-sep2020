import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // step 1: create custom event --create and ovject for EventEmitter
  @Output()  profileLoaded = new EventEmitter();
  // step 2:
  constructor() { }

  ngOnInit(): void { // life cycle
    console.log('inside ngOnInit');
    // ideal place for ajax calls/emitting events
    // step3: emit the custom event.
  }
  sendDataHandler(): void {
    this.profileLoaded.emit('arun kumar'); // step 4: sending arun kumar  to parent    
  }

}
