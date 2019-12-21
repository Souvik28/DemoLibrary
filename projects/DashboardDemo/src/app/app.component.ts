import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashboardDemo';
  profileForm: FormGroup;
  countryName = 'India';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      country: ['India', Validators.required],
      state: ['', Validators.required]
    })
  }
  changeStateField() {
    this.countryName = this.profileForm.controls.country.value;
    this.profileForm.controls.state.setValue('');
  }
  onSubmit() {
    console.log(this.profileForm);
  }
}
