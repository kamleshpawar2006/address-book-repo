import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  success = false;
  constructor(private _fb: FormBuilder, private _myService: MyServiceService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.myForm = this._fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      isActive: ['', [Validators.required]],
    });
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      let allContacts = this._myService.getContact();
      let maxID = Math.max.apply(Math, allContacts.map(function(o) { return o.id }));
      if(maxID > 0) {
        maxID++;
      }else{
        maxID = 1;
      }
      this._myService.addConact({...this.myForm.value, id: maxID});
      this.submitted = false;
      this.buildForm();
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 3000);
    }else{
      this.submitted = true;
    }
  }

}

