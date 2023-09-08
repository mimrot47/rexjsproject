import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PromisesComponent } from './components/promises/promises.component';
import { ObservableComponent } from './components/observable/observable.component';
import { ListComponent } from './components/observable/list/list.component';
import { FromEventComponent } from './components/observable/from-event/from-event.component';
import { IntervalComponent } from './components/interval/interval.component';
import { OfFormComponent } from './components/observable/of-form/of-form.component';

const routes: Routes = [
  // {path:'',component:HeaderComponent},
  {path:'promise',component:PromisesComponent},
  {path:'observable',component:ObservableComponent,children:[
    {path:"",component:ListComponent},
    {path:"form-event",component:FromEventComponent},
    {path:"interval",component:IntervalComponent},
    {path:"of-form",component:OfFormComponent},
  ]},
  {path:'**',component:PromisesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
