import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  addressList = [];
  constructor(private _myService: MyServiceService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.addressList = this._myService.getContact();
  }

  deleteContact(id) {
    this._myService.removeContact(id);
    this.getContacts();
  }

}
