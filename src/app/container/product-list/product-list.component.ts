import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { FilterComponent } from './filter/filter.component';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,FilterComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
// reference variable for component
selectedProduct:Product;
  products=[
    {
      id:1,
      name:'shirt',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      dicountedPrice:90,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:2,
      name:'frock',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:false,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:3,
      name:'skert',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      dicountedPrice:90,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:4,
      name:'name4',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:4,
      name:'name5',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:false,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:5,
      name:'name1',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      dicountedPrice:90,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:5,
      name:'name1',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:7,
      name:'name1',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:8,
      name:'name1',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
    {
      id:9,
      name:'name1',
      description:"decscription 1",
      brand:"brand 1",
      gender:"Men",
      category:"category 1",
      size:[6,7,7,9,10],
      color:['white','blue','black'],
      price:160,
      is_in_inventory:true,
      items_left:3,
      imgURL:"",
      slug:"slug 1"
    },
  ]
  totalProductCount = this.products.length;
  totalProductInStock=this.products.filter(p=>p.is_in_inventory===true).length
  totalProductOutOfStock=this.products.filter(p=>p.is_in_inventory===false).length
    selectedradiobutton:string="All"
  
  onFilterChanged(value:string){
    console.log("value:"+value)
    console.log("filter changed")
    this.selectedradiobutton=value


  }
  //from container component  
  @Input() searchTxt:string=""


  

}
