import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'rxjs';


  ngOnInit(): void {
    this.myPromise('Eduardo').then(result => console.log(result))
    this.myPromise('João').then(result => console.log(result)).catch(error => console.log('Error: ', error))
  }

  myPromise(name: string):Promise<string>{
    return new Promise((resolve, reject) => {
      if (name === 'Eduardo'){
        setTimeout(()=> {
          resolve(`Welcome, ${name}`)
        }, 1000)
      } else {
        reject(`Ops, you're not ${name}`)
      }
    })
  }
}
