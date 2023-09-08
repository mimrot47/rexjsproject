import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit{

  dellAvailabe(){
    return false;
  }

  hpAvialable()
  {
    return false;

  }

  ngOnInit(): void {
    let getBook = new Promise((resolve,reject)=>{
      if(this.dellAvailabe())
      {
       return setTimeout(()=>{
          resolve("Dell is purchesed");
       },3000)
      }else if(this.hpAvialable()){
        return setTimeout(()=>{
          resolve("hp is purchesed");
       },3000)
      }else{
        return setTimeout(()=>{
          reject("I don't like that");
       },3000)
      }
    });
    getBook.then(res=>{
      console.log("Result code => ",res);
    }).catch(res =>{
      console.log(res);
    })
  }

}
