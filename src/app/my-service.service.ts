import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  getContact() {
    return JSON.parse(localStorage.getItem('addressList'));
  }

  getContactById(id) {
    let allContacts = this.getContact();
    let contact = allContacts.find(e => {
      return e.id == id;
    });
    return contact;
  }

  addConact(contact) {
    let allContacts = this.getContact();
    allContacts.push(contact);
    localStorage.setItem('addressList', JSON.stringify(allContacts));
  }

  editConact(contact) {
    let allContacts = this.getContact();
    allContacts[allContacts.findIndex(el => el.id === contact.id)] = contact;
    localStorage.setItem('addressList', JSON.stringify(allContacts));
  }

  removeContact(id) {
    let allContacts = this.getContact();
    allContacts = allContacts.filter(function( el ) {
      return el.id !== id;
    });
    localStorage.setItem('addressList', JSON.stringify(allContacts));
  }

}
