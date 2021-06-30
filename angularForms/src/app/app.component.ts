import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupFrom: NgForm;
  title = 'angularForms';
  defaultValue = 'pet';
  answer: string = '';
  gender: Array<string> = ['male', 'female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupFrom.setValue({
    //   userData: {
    //     username: 'SaranyaG',
    //     email: 'ugomecome@gmail.com',
    //     question: 'lkkkll',
    //     secret: 'pet',
    //     gender: 'female',
    //   },
    // });
  }
  // onSubmit(form:NgForm){
  //   console.log("form submitted!!",form);
  // }
  onSubmit() {
    console.log(this.signupFrom);
  }
}
