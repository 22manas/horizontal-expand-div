import { Component , ViewChild} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChild('container') container: HTMLElement; 
  @ViewChild('newSection') newSection: HTMLElement;

  add(ctnl, add) {
    console.log({ctnl});
   ctnl.classList.toggle('container-add');
   add.classList.toggle('hide-add');
  } 

  apply(ctnl, add) {
   ctnl.classList.toggle('container-add');
   add.classList.toggle('hide-add');
  } 

  cancel(ctnl, add) {
   ctnl.classList.toggle('container-add');
   add.classList.toggle('hide-add');
  } 
}
