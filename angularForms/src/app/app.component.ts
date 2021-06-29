import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularForms';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit(form:HTMLFormElement){
    console.log("form submitted!!",form);
  }
}
