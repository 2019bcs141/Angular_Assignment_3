import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular_assignment_3';
  suggestedName ="";
  suggestUserName() {
    this.suggestedName = 'Superuser';
  }
  
  defaultquestion = "teacher"

  genders = ['male', 'female'];
  answer ="";
  submitted = false;
  user ={
    username : "",
    email : "",
    securityQuestion: "",
    securityAnswer : "",
    gender: ""
  }

  onSubmit(form: any){
      this.submitted = true;
      this.user.username = form.value.userData.username;
      this.user.email = form.value.userData.email;
      this.user.securityQuestion = form.value.securityData.question;
      this.user.securityAnswer = form.value.securityData.answer;
      this.user.gender = form.value.securityData.gender

      form.reset();
  }


}
