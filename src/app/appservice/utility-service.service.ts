import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor() { }
  print(values:any,containerId:string){
    let el = document.createElement('li');
    el.innerText=values;
    document.getElementById(containerId)?.append(el);
  }
}
