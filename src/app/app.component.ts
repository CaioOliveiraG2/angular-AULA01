import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Caio Oliveira';
  nascimento = 1999;
  counter = 0;

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 100);

  getIdade() {
    return 2022 - this.nascimento;
  }
  getMinutos() {
    return Math.trunc(this.counter / 60);
  }
  getSegundos() {
    return Math.trunc(this.counter % 60);
  }
  getNumbers(){
    return [25, 3, 7, 13, 19, 35, 26];
  }
}
