import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { SharkDirective } from './shark.directive';
import { NgModel } from '@angular/forms';

import { of, interval } from 'rxjs';  
import { mergeMap, map, switchMap } from 'rxjs/operators';  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NgModel) modelRefList: QueryList<NgModel>;

  firstName:any
  middleName:any
  lastName:any

  constructor(){
  

// const letters = of('a', 'b');  
// const numbers = of('1','2','3','4','5','6','7','8','9','10','11','12','13');
// const result = interval(1000).pipe(  
//   switchMap(x => interval(100)),  
// );  
// interval(1000).subscribe(x => console.log('switch',x));  

const array1 = [100,100,25];

// pass a function to map
const map1 = array1.filter((x,y) => x == y);

console.log(map1);
console.log(array1);
// expected output: Array [2, 8, 18, 32]


  }

  labels = ['recent', 'popular', 'new'];

  @ViewChildren(Page1Component) allLabels: Page1Component;


  title = 'demoApp';
  user = {
    name:"Alex"
  }
  updateUser(){
    this.user.name = "ted"
  }
  extraCreature!: string;

  // @ViewChild('someInput') someInput1: ElementRef;

  // @ViewChild(SharkDirective)
  // set appShark(directive: SharkDirective) {
  //   console.log('directive', directive)
  //   // this.extraCreature = directive.creature;
  // };

  ngAfterViewInit() {
    setTimeout(function(){
      console.log(document.getElementById('someInput'))

    },2000)
    // console.log(this.extraCreature);
    // this.someInput.nativeElement.value = 'Whale!';
    // this.modelRefList.forEach(element => {
    //   console.log(element)
    //   //console.log(element.value)
    // });
  }
}
