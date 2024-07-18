import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

// @Output() data = new EventEmitter<string>()

// onSub(value:any){
//   this.data.emit(value)
// }
}
