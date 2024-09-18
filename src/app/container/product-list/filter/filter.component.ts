import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  //using bind custom pRoperties
 @Input() all:number = 0;
 @Input() inStock:number = 0;
 @Input() outOfStock:number = 0;
 //using bind custom event

 selectedRadioButton:string = 'All';
 @Output()
 selectedFilterButtononChanged :EventEmitter<string> = new EventEmitter<string>();
 onSelectedFilterButtonChanged(){
  console.log(this.selectedRadioButton)
     this.selectedFilterButtononChanged.emit(this.selectedRadioButton)
 }
}
