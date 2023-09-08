import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { UtilityServiceService } from 'src/app/appservice/utility-service.service';

@Component({
  selector: 'app-of-form',
  templateUrl: './of-form.component.html',
  styleUrls: ['./of-form.component.scss']
})
export class OfFormComponent implements OnInit{
  obsmsg:any;
constructor(public ser:UtilityServiceService){

}
   ngOnInit(): void {
     const off = of('Rohit','Gajamam','Shivaji')
     off.subscribe(res=>{
      // console.log(res)
      this.ser.print(res,"ofcontainer")
     })
     const off1 = of({a:'Rohit',b:'Gajamam',c:'Shivaji'})
     off1.subscribe(res=>{
      this.obsmsg = res;
      // console.log("ObsMsg => "+this.obsmsg.a)
      // this.ser.print(res,"ofcontainer")
     })

     const off2 = from(['Rohit','Gajamam','Shivaji'])
     off2.subscribe(res=>{
      console.log(res)
      this.ser.print(res,"ofcontainer3")
     })


     const prom =  new Promise(resolve =>{
      setTimeout(() => {
        resolve("Promise resolved");
      }, 3000);
     })

     prom.then(res=>{
      console.log(res);
     })

     const dev2 = from(prom)
     dev2.subscribe(res=>{
      console.log(res);
      this.ser.print(res,'ofcontainer4')
     })

     const dev3 = from("Welcome to RK Digital")
     dev2.subscribe(res=>{
      console.log(res);
      this.ser.print(res,'ofcontainer4')
     })

   }
}
