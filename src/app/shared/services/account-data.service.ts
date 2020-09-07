import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountDataService {
// step 1:
private accountName = ' arun';

   private myAccount = new BehaviorSubject<any>(this.accountName);
  latestAccountName: Observable<any> = this.myAccount.asObservable();

  constructor() { }

  updateAccountName(newName){
    console.log(newName);
    this.myAccount.next(newName);
    
  }
}
