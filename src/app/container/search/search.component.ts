import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchText:string = '';

  updateSearchtext(event:any){
    this.searchText = event.target.value;
    // console.log(this.searchText);

  }
  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.searchTextChange.emit(this.searchText);
  }
  // template reference variable
  // setSearchText(inputhl:HTMLInputElement){
  //    console.log(inputhl)
  //    this.searchText=inputhl.value
  //    this.searchTextChange.emit(this.searchText);
  // }

  // view Child
  @ViewChild('searchInput') searchInput: ElementRef;


  setSearchText(){
  
     this.searchText=this.searchInput.nativeElement.value
     this.searchTextChange.emit(this.searchText);
  }
}
