import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@app/service/account.service';
import { Account } from '@app/models/account';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  validateForm: FormGroup;
  isLoading: boolean = false;
  account: Account;

  constructor(private fb: FormBuilder, private accountService: AccountService, private nzMessageService: NzMessageService) {}

  ngOnInit(): void {

    this.account = this.accountService.currentAccount;

    console.log(this.account);

    this.validateForm = this.fb.group({
      email: [this.account.email, [Validators.email, Validators.required]],
      password: [null],
      checkPassword: [null, [this.confirmationValidator]],
      nickname: ["coming soon ..."],
      phoneNumberPrefix: ['+1'],
      phoneNumber: [null],
      // address: [this.account.address, [Validators.required]],
      agree: [false]
    });
  }

  submitForm(): void {
    
    this.isLoading = true;

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let updateAccount = this.account;

    // updateAccount.address = this.validateForm.value['address'];
    updateAccount.phone = this.validateForm.value['phone'];
    // updateAccount.address = this.validateForm.value['password'];

    setTimeout(() => { this.isLoading = false; this.confirm() }, 1000);
  }

  confirm(): void {
    this.nzMessageService.info('Profile Updated!');
  }
  
  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      // return { required: true };
      return { error: false};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }


}
