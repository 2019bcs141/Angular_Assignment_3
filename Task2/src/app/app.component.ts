import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_assignment_3_task2';
  genders = ['male', 'female'];
  signupForm : any;
  issubmitted = false;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [ Validators.required]),
        email: new FormControl( null, [Validators.required, Validators.email]),
      }),

      gender: new FormControl('male'),
    });

  }

  onSubmit() {
    this.issubmitted = true;
  }

}
