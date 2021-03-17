import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'Product-Details',
  templateUrl: './Product-Details.component.html',
  styleUrls: ['./Product-Details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  elements: Array<any> = [
  {name:'Flash light', description:'A flashlight (US) or torch or torchlight (UK) is a portable hand-held electric light. Formerly, the light source typically was a miniature incandescent light bulb but these have been displaced by light-emitting diodes (LEDs) since the mid-2000s. A typical flashlight consists of the light source mounted in a reflector, a transparent cover (sometimes combined with a lens) to protect the light source and reflector, a battery, and a switch, all enclosed in a case.'},
  {name:'Wooden stick', description:'a woody piece or part of a tree or shrub: such as. a : a usually dry or dead severed shoot, twig, or slender branch. b : a cut or broken branch or piece of wood gathered for fuel or construction material.'},
  {name:'Gas', description:'Gasoline or petrol is a transparent, petroleum-derived flammable liquid that is used primarily as a fuel in most spark-ignited internal combustion engines. It consists mostly of organic compounds obtained by the fractional distillation of petroleum, enhanced with a variety of additives. On average, a 160-liter (42-U.S.-gallon) barrel of crude oil can yield up to about 72 liters (19 U.S. gallons) of gasoline after processing in an oil refinery, depending on the crude oil assay and on what other refined products are also extracted.[1] The characteristic of a particular gasoline blend to resist igniting too early (which causes knocking and reduces efficiency in reciprocating engines) is measured by its octane rating, which is produced in several grades. Tetraethyl lead and other lead compounds, once widely used to increase octane rating, are no longer used in most areas (they are still used in aviation[2] and auto-racing[3]). Other chemicals are frequently added to gasoline to improve chemical stability and performance characteristics, control corrosiveness, and provide fuel system cleaning. Gasoline may contain oxygen-containing chemicals such as ethanol, MTBE, or ETBE to improve combustion. '},
  {name:'Tent', description:'A tent (/tɛnt/ (About this soundlisten)) is a shelter consisting of sheets of fabric or other material draped over, attached to a frame of poles or attached to a supporting rope. While smaller tents may be free-standing or attached to the ground, large tents are usually anchored using guy ropes tied to stakes or tent pegs. First used as portable homes by nomads, tents are now more often used for recreational camping and as temporary shelters.'},
  {name:'Travel bag', description:'A suitcase is a form of luggage. It is often a somewhat flat, rectangular-shaped bag with rounded square corners, either metal, hard plastic or made of cloth, vinyl or leather that more or less retains its shape. Vinyl, leather or cloth suitcases may have a metal frame. It has a carrying handle on one side and is used mainly for transporting clothes, toiletries and other small possessions during trips. Hardshell suitcases open on hinges like a door. Suitcases may lock with keys or a combination.'},
  {name:'Food', description:'Food is any substance[1] consumed to provide nutritional support for an organism. Food is usually of plant, animal or fungal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism`s cells to provide energy, maintain life, or stimulate growth. Different species of animals have different feeding behaviours that satisfy the needs of their unique metabolisms, often evolved to fill a specific ecological niche within specific geographical contexts.'}];
  Display: string = 'Delete';
  ProductName = '';
  ProductDescription = '';
  TotalProducts = 0;
  constructor(private sharedservice: SharedService) {
    this.GetNumberOfProducts();
   }

  ngOnInit(): void {
  }
  GetNumberOfProducts(){
    this.TotalProducts = this.elements.length;
  }
  ViewProduct(Product){
    this.Display = 'View';
    localStorage.setItem('ProductName', Product.name);
    this.ProductName = Product.name;
    this.ProductDescription = Product.description;
    console.log(Product);
  }
  EditProduct(Product){
    this.Display = 'Edit';
    localStorage.setItem('ProductName', Product.name);
    this.ProductName = Product.name;
    this.ProductDescription = Product.description;
    console.log(Product);
  }
  UpdateProduct(){
    let ProductName = localStorage.getItem('ProductName');
    let index = 0;
    this.elements.forEach(element=>{
      if(element.name == ProductName){
        this.elements[index].name = this.ProductName;
        this.elements[index].description = this.ProductDescription;
      }
      index++;
    });
    localStorage.setItem('ProductName', this.ProductName);
    localStorage.setItem('ProductDescription', this.ProductDescription);
  }
  RemoveProduct(Product){
    this.Display = 'Delete';
    let index = 0;
    this.elements.forEach(element=>{
      if(element.name == Product.name){
        this.elements.splice(index,1);
      }
      index++;
    });
    this.GetNumberOfProducts();
  }
  AddProduct(){
    if(this.ProductName != '' && this.ProductDescription != ''){
      let element = {name: this.ProductName, description: this.ProductDescription};
      this.elements.unshift(element);
      this.Display = 'Delete';
      alert('Product added successfully');
    }else{
      alert('Please input name and description.');
    }
    this.GetNumberOfProducts();
  }
  DisplayAddProduct(){
    this.Display = 'Add';
    this.ProductName = '';
    this.ProductDescription = '';
  }
}
