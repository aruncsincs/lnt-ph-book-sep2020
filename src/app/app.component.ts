import { Component } from '@angular/core';
// Decorator
@Component({
  selector: 'app-root', // exposed in selector --element selector --mandaory
  templateUrl: './app.component.html', // html --mandatory --only one
  styleUrls: ['./app.component.css']    // css --optional --can multiple
}) 
export class AppComponent { // ts
  title = 'lnt-ph-book-sep2020';
}
