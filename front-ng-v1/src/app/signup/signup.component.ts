import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../backend.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userModel: User;
  headers: any;
  signupForm = this.fb.group({
    email: [''],
    password: [''],
    ccinfo: [''],
    admin: [false],
  });

  constructor(
    private fb: FormBuilder,
    private backendService: BackendService
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signupForm.value);
    this.showUser()
  }

  showUser() {
    this.backendService
      .getHome()
      // clone the data object, using its known Config shape
      // .subscribe((data: User) => this.userModel = { ...data });
      // .subscribe(data => this.userModel = {
      //   email: (data as any).email,
      // });
      // resp is of type `HttpResponse<Config>`
      .subscribe((resp) => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map((key) => `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.userModel = { ...resp.body };
        console.log(this.headers)
        console.log(this.userModel)
      });
  }
}
