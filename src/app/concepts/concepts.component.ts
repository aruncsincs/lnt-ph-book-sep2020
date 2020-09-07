import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
      .greenText{
        color: green;
      }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';
  exp = 20;

  // property binding related
  companyName = 'L & T Constructions';
  isLoggedIn = false;  

  // two way binding related
  courseName = 'Angular';

  // custom event 
  profileName: any;

  // *ngFor
  skillsList: string[] = ['html', 'css', 'js'];

  constructor() { }

  ngOnInit(): void {
  }

  getExp(): number {
    return this.exp;
  }

  // prop binding
  isAuth(): boolean{
    return !this.isLoggedIn;
  }

  // event binding 
  clickHandler(evt): void{
    console.log(evt);
    alert('clicked');
  }

  // step 6 in ceb / custom event binding handler
  profileLoadedHandler(evt): void{
    console.log(evt);
    this.profileName = evt;
  }
}