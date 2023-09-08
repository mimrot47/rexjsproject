import { Subscription, interval, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UtilityServiceService } from 'src/app/appservice/utility-service.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit{
  obMsg:any;
  subScribtion:Subscription | undefined;
  constructor(private ut:UtilityServiceService){

  }
  ngOnInit(): void {
    //  const brodCast = interval(1000);
     const brodCast = timer(5000,100)

     this.subScribtion=brodCast.subscribe(res=>{
      console.log(res);
      this.obMsg ="Video"+res;
      this.ut.print(this.obMsg,"elContainer");
      this.ut.print(this.obMsg,"elContainer1");
      this.ut.print(this.obMsg,"elContainer2");
      if(res>=7)
      {
        this.subScribtion?.unsubscribe();
      }
     })
  }

}
