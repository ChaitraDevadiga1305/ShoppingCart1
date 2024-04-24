import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  addCartProducts : any = [];

  products=[
    {id:1, name:'TIME WEAR', description:'TIMEWEAR New Track Number Dial, Day & Date, Brown Leather Strap Analog', 
    price: 3290, instock:'In stock', image:'../assets/images/products/watch.jpg', addedToCart: false},
  
    {id:2, name:'BOAT HEADSET', description:'boAt Rockerz 370 Bluetooth Headset  (Buoyant Black, On the Ear)', 
    price: 1299, instock:'In stock', image:'../assets/images/products/headset.jpg',addedToCart: false},
  
    {id:3, name:'IPHONE', description:'The processor in this phone is Apple A16 and it has 6 GB RAM with 128 GB Internal Memory.',
     price: 65999, instock:'In stock', image:'../assets/images/products/iphone.jpg',addedToCart: false},
  
    {id:4, name:'DELL LAPTOP', description:'Dell Laptop In Navi Mumbai, 15.6 inches, Core i3', 
    price: 37599, instock:'In stock', image:'../assets/images/products/dell-laptop.jpg',addedToCart: false},
  
    {id:5, name:'SAMSUNG TV', description:'Samsung 108 cm (43 inches) Crystal 4K Neo Series Ultra HD Smart LED TV', 
    price: 32900, instock:'In stock', image:'../assets/images/products/TV.jpg',addedToCart: false},
  
    {id:6, name:'EPSON PRINTER', description:'Epson Colour Printer Inkjet 3100.', 
    price:14000, instock:'In stock', image:'../assets/images/products/printer.jpg',addedToCart: false},
  
    {id:7, name:'Samsung Mobile Phone', description:'Samsung Galaxy S21 ', 
    price:32000, instock:'In stock', image:'../assets/images/products/Samsung Phone.jpg',addedToCart: false}
  ];

  GetAllProducts(){
    return this.addCartProducts;
  }

  OnAddToCart(product:{id:number, name:string, description:string, 
    price:number, instock:string, image:string,addedToCart:boolean}){
      this.addCartProducts.push(product);
      
    }

  RemoveFromCart(CartProduct:{id:number, name:string, description:string, 
      price:number, instock:string, image:string,addedToCart:boolean}){
      const index = this.addCartProducts.findIndex( (cart: { id: number; })=>cart.id === CartProduct.id);
      if(index !== -1){
        this.addCartProducts.splice(index,1)
      }
      }

}
