import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { phoneNumberChecker } from '../custom-validation/phone_number';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private registerService: RegisterService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.registerForm = this.formbuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        Image1: ['', Validators.required],
      },
      { validators: phoneNumberChecker('phoneNumber') }
    );
  }
  ImageUpload(event) {
    const file = event.target.files[0];
    this.registerForm.patchValue({
      Image1: file,
    });
  }
  get h() {
    return this.registerForm.controls;
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.registerService.addUser(this.registerForm.value).subscribe(
      (data: any) => {
        this.toastr.success(data.message);
        if (data.success) {
          this.registerForm.reset();
        }
      },
      (error) => {
        this.toastr.warning(error.message);
      }
    );
  }

  onReset() {
    this.registerForm.reset();
  }
}
