import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVariable: string = 'I am a bossy bitch';

  updateMyValue() {
        this.myVariable = 'Now the force is even stronger';

  }

}
