import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'contacts/:id', component: ContactDetailsComponent}, // url parameter
  {path: 'contacts', component: ContactsComponent},
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ContactsRoutingModule { }
