import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <div class="text-center">
  <hr>
  <app-menu >
    <li class="nav-item footer">
        <a class="nav-link" href="/">Back to top</a>
    </li>
  </app-menu>
    <p class="grayText">Copyright 2020 | Arun kumar</p>
    <div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
