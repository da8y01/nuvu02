import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BackendService } from '../backend.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  emailParam = ''
  userForm = this.fb.group({
    email: [''],
    password: [''],
    ccinfo: [''],
    admin: [false],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
    // const emailParam: string = this.route.snapshot.queryParamMap.get('email')
    this.backendService.getUser(this.route.snapshot.paramMap.get('email')).subscribe((resp) => {
      console.log(resp)
    })
  }

  setAdmin = (checked: Boolean) => {
    this.userForm.patchValue({admin: true})
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.signupForm.value);
    
  }
}
