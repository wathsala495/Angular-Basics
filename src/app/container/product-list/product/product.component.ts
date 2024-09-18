import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../../Models/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
    //  @Input() product:{
    //   id:number,
    //   name:string,
    //   description:string,
    //   brand:string
    //   gender:string,
    //   category:string,
    //   size:number[],
    //   color:string[],
    //   price:number,
    //   dicountedPrice?:number,
    //   is_in_inventory:boolean,
    //   items_left:number,
    //   imgURL:string,
    //   slug:string
    //  }

    @Input() product:Product;

}
