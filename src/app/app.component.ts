import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book-project';
  addressList = [
    {id: 1, fname: 'Ram', lname: 'Raghuveer', email: 'Ram@gmail.com', phone: '989098909890', isActive: 'Y' },
    {id: 2, fname: 'Ramesh', lname: 'Das', email: 'Ram@gmail.com', phone: '989098909890', isActive: 'Y' }
  ];
  constructor() { 
    localStorage.setItem('addressList', JSON.stringify(this.addressList));
  }
}
