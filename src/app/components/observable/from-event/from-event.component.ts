import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { UtilityServiceService } from 'src/app/appservice/utility-service.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  @ViewChild("addButton") addButton:ElementRef | undefined;

  ngOnInit(): void {

  }
  constructor(private _service:UtilityServiceService){}
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addButton?.nativeElement,'click').subscribe((res)=>{
      let value="Video "+count++;
      this._service.print(value,"unlist")
      this._service.print(value,"unlist1")
    })
  }


}

