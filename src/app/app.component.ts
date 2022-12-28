import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson7';
  cur:string = ''
  val:string = ""
  currencySubscriber(e:any){
    this.cur = e.money
    this.val = e.cur
  }
}
