import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  success: boolean;
  constructor(private _fb: FormBuilder, private _myService: MyServiceService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this._route.params.subscribe(params => {
      let contact = this._myService.getContactById(+params.id);
      console.log(contact);
      this.myForm = this._fb.group({
        id: [contact.id],
        fname: [contact.fname, [Validators.required]],
        lname: [contact.lname, [Validators.required]],
        email: [contact.email, [Validators.required]],
        phone: [contact.phone, [Validators.required]],
        isActive: [contact.isActive, [Validators.required]],
      });
    })
  }

  onSubmit(form: FormGroup) {
    if(form.valid) {
      this.submitted = false;
      this._myService.editConact(this.myForm.value);
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
