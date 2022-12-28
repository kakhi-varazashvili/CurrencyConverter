import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  constructor(private http:HttpClient) { }
  currencyobj:any
  arr:any[] = []
  ngOnInit(): void {
    this.http.get("https://open.er-api.com/v6/latest/Gel")
    .subscribe((data:any)=>{
      this.currencyobj = data.rates
      for(var [i,j] of Object.entries(this.currencyobj)){
         let obj = {
          cur:i,
          val:j
         }
         this.arr.push(obj)
      }
      console.log(this.arr)
    })
  }
  leftcurrency:string="GEL"
  rightcurrency:string="GEL"
  amount:number=0
  @Output()
  currencyEmitter:EventEmitter<any> = new EventEmitter()
  convert(){
    this.http.get(`https://open.er-api.com/v6/latest/${this.leftcurrency}`)
    .subscribe((data:any)=>{
      let exrt = data.rates[this.rightcurrency]
      let obj = {
        money:this.amount*exrt,
        cur:this.rightcurrency,
      }
      this.currencyEmitter.emit(obj)
    })

    
  }
}
