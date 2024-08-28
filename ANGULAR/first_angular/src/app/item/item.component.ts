import { Component } from '@angular/core';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  username = "Peter Pan"
  itemname = "Pencils"
  setStatus:string = "Yes"
  getStockStatus(){
    return this.setStatus
  }
  isSoldOut:boolean = false

  // set button to be disabl;ed in 5 seconds
  constructor(){
    setTimeout(() => {
      this.isSoldOut = true
    }, 5000)
  }

  // Event Binding
  onSave(){
    alert('Information saved!')
  }

  productmsg:string = ""
  total_in_stock:number = 20
  total_added:number = 0
  outstock:string = ""
  btn_out_of_stock:boolean = false
  addProduct(){
    if(this.total_in_stock > 0){
      this.productmsg = "Product 1 was added"
      this.total_added ++
      this.total_in_stock --
    }
    else{
      this.outstock = "Item is out of stock"
      this.btn_out_of_stock = true
    }
  }
}
