import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [SearchComponent,CommonModule,ProductListComponent,ProductDetailComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
   product={
     name:'ipPhone',
    price:789,
    color:'black',
    discount:8.5,
    inStock:5,
    image:"assets/images/image1.jpeg"
   }
   addToCart:number=0;
  //  name="John"
   getDiscountPrice(){
    return this.product.price+(this.product.price*this.product.discount/100)
   }

   onNameChange(event:any){
    // this.name=event.target.value
    //  console.log(event.target.value)
   }
   increment(){
    if(this.addToCart<this.product.inStock){
    this.addToCart++
    }
   }
   decrement(){
    if(this.addToCart>0){
    this.addToCart--
   }
  }

  listOfstring :string[]=["mark","john","jane"]

  searchText:string=""
  setSearchText(value:any){
    console.log("text:"+value)
    this.searchText=value
  }
   
}
